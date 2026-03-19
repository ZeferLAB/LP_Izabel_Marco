export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const payload = req.body
    const event = payload?.event
    const email = payload?.data?.buyer?.email

    console.log(`Evento recebido: ${event} | Email: ${email}`)

    if (!email) {
      return res.status(200).json({ received: true })
    }

    // Mapa de eventos para grupos do MailerLite
    const eventGroupMap = {
      'PURCHASE_APPROVED':             process.env.MAILERLITE_COMPRADORES_GROUP_ID,
      'PURCHASE_COMPLETE':             process.env.MAILERLITE_COMPRADORES_GROUP_ID,
      'PURCHASE_OUT_OF_SHOPPING_CART': process.env.MAILERLITE_ABANDONO_GROUP_ID,
      'PURCHASE_REFUNDED':             process.env.MAILERLITE_REEMBOLSADOS_GROUP_ID,
      'PURCHASE_EXPIRED':              process.env.MAILERLITE_BOLETO_GROUP_ID,
    }

    const groupId = eventGroupMap[event]

    if (!groupId) {
      console.log(`Evento ignorado: ${event}`)
      return res.status(200).json({ received: true })
    }

    let subscriberId

    // Tenta buscar o subscriber
    const searchRes = await fetch(
      `https://connect.mailerlite.com/api/subscribers/${encodeURIComponent(email)}`,
      {
        headers: {
          'Authorization': `Bearer ${process.env.MAILERLITE_API_KEY}`,
          'Accept': 'application/json'
        }
      }
    )

    if (searchRes.status === 404) {
      // Não encontrou — cria o subscriber
      console.log(`Criando novo subscriber: ${email}`)
      const name = payload?.data?.buyer?.name || ''
      const phone = payload?.data?.buyer?.phone || ''

      const createRes = await fetch(
        'https://connect.mailerlite.com/api/subscribers',
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.MAILERLITE_API_KEY}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            email,
            fields: { name, phone },
            status: 'active'
          })
        }
      )

      if (!createRes.ok) {
        const err = await createRes.json()
        console.error('Erro ao criar subscriber:', err)
        return res.status(200).json({ received: true })
      }

      const createData = await createRes.json()
      subscriberId = createData.data.id
      console.log(`Subscriber criado com ID: ${subscriberId}`)

    } else if (searchRes.ok) {
      // Encontrou
      const subscriberData = await searchRes.json()
      subscriberId = subscriberData.data.id
      console.log(`Subscriber encontrado com ID: ${subscriberId}`)

    } else {
      // Outro erro inesperado
      console.error('Erro inesperado ao buscar subscriber:', searchRes.status)
      return res.status(200).json({ received: true })
    }

    // Adiciona ao grupo correto
    await fetch(
      `https://connect.mailerlite.com/api/subscribers/${subscriberId}/groups/${groupId}`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.MAILERLITE_API_KEY}`,
          'Accept': 'application/json'
        }
      }
    )

    // Se comprou: remove dos grupos de recuperação
    if (event === 'PURCHASE_APPROVED' || event === 'PURCHASE_COMPLETE') {
      const recoveryGroups = [
        process.env.MAILERLITE_ABANDONO_GROUP_ID,
        process.env.MAILERLITE_GROUP_ID
      ]

      for (const gId of recoveryGroups) {
        await fetch(
          `https://connect.mailerlite.com/api/subscribers/${subscriberId}/groups/${gId}`,
          {
            method: 'DELETE',
            headers: {
              'Authorization': `Bearer ${process.env.MAILERLITE_API_KEY}`,
              'Accept': 'application/json'
            }
          }
        ).catch(() => {})
      }
    }

    console.log(`Lead ${email} → grupo ${event} processado com sucesso`)
    return res.status(200).json({ success: true })

  } catch (error) {
    console.error('Erro no webhook:', error)
    return res.status(200).json({ received: true })
  }
}

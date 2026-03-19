export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const payload = req.body
    const event = payload?.event

    if (event !== 'PURCHASE_OUT_OF_SHOPPING_CART') {
      return res.status(200).json({ received: true })
    }

    const email = payload?.data?.buyer?.email
    if (!email) {
      return res.status(400).json({ error: 'Email não encontrado no payload' })
    }

    // Busca o subscriber no MailerLite pelo email
    const searchRes = await fetch(
      `https://connect.mailerlite.com/api/subscribers/${encodeURIComponent(email)}`,
      {
        headers: {
          'Authorization': `Bearer ${process.env.MAILERLITE_API_KEY}`,
          'Accept': 'application/json'
        }
      }
    )

    if (!searchRes.ok) {
      console.error('Subscriber não encontrado:', email)
      return res.status(200).json({ received: true })
    }

    const subscriberData = await searchRes.json()
    const subscriberId = subscriberData.data.id

    // Adiciona ao grupo "Abandono de Checkout"
    await fetch(
      `https://connect.mailerlite.com/api/subscribers/${subscriberId}/groups/${process.env.MAILERLITE_ABANDONO_GROUP_ID}`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.MAILERLITE_API_KEY}`,
          'Accept': 'application/json'
        }
      }
    )

    console.log(`Lead ${email} movido para Abandono de Checkout`)
    return res.status(200).json({ success: true })

  } catch (error) {
    console.error('Erro no webhook:', error)
    return res.status(200).json({ received: true })
  }
}

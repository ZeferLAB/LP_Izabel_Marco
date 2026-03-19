export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, phone } = req.body

  if (!name || !email || !phone) {
    return res.status(400).json({ success: false, error: 'Campos obrigatórios ausentes' })
  }

  try {
    const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.MAILERLITE_API_KEY}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        email: email.trim(),
        fields: {
          name: name.trim(),
          phone: phone
        },
        groups: [process.env.MAILERLITE_GROUP_ID],
        status: 'active'
      })
    })

    const data = await response.json()

    if (response.ok) {
      return res.status(200).json({ success: true })
    } else {
      console.error('MailerLite error:', data)
      return res.status(500).json({ success: false, error: data.message })
    }

  } catch (error) {
    console.error('Server error:', error)
    return res.status(500).json({ success: false, error: 'Erro interno' })
  }
}

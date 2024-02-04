// pages/api/newsletter.js
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { email } = req.body

      // Prepare the request body for adding the email to a list
      const data = {
        // Adjust this payload according to SendGrid's API documentation and your specific requirements
        contacts: [
          {
            email: email
          }
        ]
      }

      const response = await sgMail.send(data)

      if (response[0].statusCode === 202) {
        return res.status(200).json({ success: true })
      } else {
        throw new Error(`SendGrid returned status code: ${response[0].statusCode}`)
      }
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message })
    }
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST'])
    return res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}

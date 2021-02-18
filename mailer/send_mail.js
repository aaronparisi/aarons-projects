import nodemailer from 'nodemailer'

const sendContactEmail = (from, subject, text) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'aaronscodingstuff@gmail.com',
      pass: 'ldeypkamyloyqxxj'
    }
  })

  const mailOptions = {
    from: from,
    to: 'aaronscodingstuff@gmail.com',
    subject: subject,
    text: text
  }

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response)
    }
  })
}

export default sendContactEmail
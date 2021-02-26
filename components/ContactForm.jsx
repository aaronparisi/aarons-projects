import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
// import nodemailer from 'nodemailer'

const StyledDiv = styled.div`
  opacity: ${props => props.theme.opacity}%;
  visibility: ${props => props.theme.visibility};
  transition: opacity 1.5s ease-in-out;
  display: ${props => props.theme.display};
`

const ContactForm = ({ theme }) => {
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

  return (
    <ThemeProvider theme={theme} >
      <StyledDiv id="contact-form">
        <h1>Say hi!</h1>
        <p>I am currently looking for work in the Seattle area!</p>
        <button
          className="email-button"
          // onClick={() => sendContactEmail('parisi.aaron@gmail.com', 'hi from your app', 'somebody clicked the button!')}
        >
          <a href="mailto: parisi.aaron@gmail.com">Get in Touch</a>
        </button>
      </StyledDiv>
    </ThemeProvider>
  )
}

export default ContactForm
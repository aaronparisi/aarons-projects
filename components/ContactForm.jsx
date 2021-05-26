import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import emailjs, { init } from 'emailjs-com'
init("user_GjyD0j0dNrlKS9KVIfHed")
// import nodemailer from 'nodemailer'

const StyledDiv = styled.div`
  opacity: ${props => props.theme.opacity}%;
  visibility: ${props => props.theme.visibility};
  transition: opacity 1.5s ease-in-out;
  display: ${props => props.theme.display};
`

const ContactForm = ({ theme }) => {
  const [email, setEmail] = useState("")
  const [msgBody, setMsgBody] = useState("")
  const [fromName, setFromName] = useState("")
  // const sendContactEmail = (from, subject, text) => {
  //   const transporter = nodemailer.createTransport({
  //     service: 'gmail',
  //     auth: {
  //       user: 'aaronscodingstuff@gmail.com',
  //       pass: 'ldeypkamyloyqxxj'
  //     }
  //   })
  
  //   const mailOptions = {
  //     from: from,
  //     to: 'aaronscodingstuff@gmail.com',
  //     subject: subject,
  //     text: text
  //   }
  
  //   transporter.sendMail(mailOptions, function(error, info) {
  //     if (error) {
  //       console.log(error);
  //     } else {
  //       console.log('Email sent: ' + info.response)
  //     }
  //   })
  // }

  const handleSubmit = (e) => {
    e.preventDefault()

    const templateId = 'template_auga2g4';
  
    sendFeedback(templateId, { message: msgBody, from_name: fromName, reply_to: email })
  }
  
  const sendFeedback = (templateId, variables) => {
    emailjs.send(
      'service_jfp0y1e', templateId, variables
      ).then(res => {
        setEmail("")
        setFromName("")
        setMsgBody("")
        window.scrollTo(0,0)
        alert("Thanks for contacting me!")
      })
      // Handle errors here however you like, or use a React error boundary
      // .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
      .catch(err => alert('Something went wrong, try agian later!'))
  }
  

  return (
    <ThemeProvider theme={theme} >
      <StyledDiv id="contact-form">
        <h1>Say hi!</h1>
        <p>I am currently looking for work in the Seattle area!</p>
        {/* <button
          className="email-button"
          // onClick={() => sendContactEmail('parisi.aaron@gmail.com', 'hi from your app', 'somebody clicked the button!')}
        >
          <a href="mailto: parisi.aaron@gmail.com">Get in Touch</a>
        </button> */}

        <form
          id="contact-form-form"
        >
          <input 
            type="text" 
            name="fromName" 
            id="fromName"
            value={fromName}
            onChange={e => setFromName(e.currentTarget.value)}
            placeholder="Your name"
          />
          <input 
            type="email" 
            name="email" 
            id="email"
            value={email}
            onChange={e => setEmail(e.currentTarget.value)}
            placeholder="Your email"
          />
          <textarea 
            name="msgBody" 
            id="msgBody" 
            cols="30" 
            rows="10"
            value={msgBody}
            onChange={e => setMsgBody(e.currentTarget.value)}
            placeholder="Your message"
          ></textarea>
          <button className="email-button" onClick={e => handleSubmit(e)} >Send Email!</button>
        </form>
      </StyledDiv>
    </ThemeProvider>
  )
}

export default ContactForm
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
  const [submitDisabled, setSubmitDisabled] = useState(true)
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

  const handleInputBlur = e => {
    e.preventDefault()

    if (e.currentTarget.value === "") {
      e.currentTarget.style=`background-color: #ca7297;`
      e.currentTarget.placeholder = `${e.currentTarget.name} is required`
    } else {
      e.currentTarget.style=``

      if (email !== "" && fromName !== "" && msgBody !== "") {
        setSubmitDisabled(false)
      }
    }
  }

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
            name="Name" 
            id="Name"
            value={fromName}
            onChange={e => setFromName(e.currentTarget.value)}
            onBlur={e => handleInputBlur(e)}
            placeholder="Name"
          />
          <input 
            type="email" 
            name="Email" 
            id="Email"
            value={email}
            onChange={e => setEmail(e.currentTarget.value)}
            onBlur={e => handleInputBlur(e)}
            placeholder="Email"
          />
          <textarea 
            name="Message" 
            id="Message" 
            cols="30" 
            rows="10"
            value={msgBody}
            onChange={e => setMsgBody(e.currentTarget.value)}
            onBlur={e => handleInputBlur(e)}
            placeholder="Say hi..."
          ></textarea>
          <button 
            className="email-button" 
            onClick={e => handleSubmit(e)} 
            disabled={submitDisabled}
          >
            Send Email!
          </button>
        </form>
      </StyledDiv>
    </ThemeProvider>
  )
}

export default ContactForm
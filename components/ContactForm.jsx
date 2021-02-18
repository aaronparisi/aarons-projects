import React from 'react'
import sendContactEmail from '../mailer/send_mail'

const ContactForm = () => {
  return (
    <div id="contact-form">
      <h1>Say hi!</h1>
      <p>I am currently looking for work in the Seattle area!</p>
      <button
        className="email-button"
        onClick={() => sendContactEmail('parisi.aaron@gmail.com', 'hi from your app', 'somebody clicked the button!')}
      >
        {/* <a href="mailto: parisi.aaron@gmail.com">Get in Touch</a> */}
      </button>
    </div>
  )
}

export default ContactForm
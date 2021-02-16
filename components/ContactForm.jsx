import React from 'react'

const ContactForm = () => {
  return (
    <div id="contact-form">
      <h1>Say hi!</h1>
      <p>I am currently looking for work in the Seattle area!</p>
      <button className="email-button">
        <a href="mailto: parisi.aaron@gmail.com">Get in Touch</a>
      </button>
    </div>
  )
}

export default ContactForm
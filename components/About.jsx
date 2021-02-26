import React from 'react'

const About = () => {
  return (
    <div id="about">
      <h3 id="about-header">About me:</h3>
      <div id="about-content">
        <p id="about-paragraph">
          It started when I was teaching AP Calculus BC, Multivariable Calculus, and Statistics at <a href="https://www.salisburyschool.org/">Salisbury School</a> on a whiteboard...
          <br/>
          <br/>
          Then I worked a job at a <a href="https://www.1031services.com/">real estate exchange company</a> whose database software had some... quirks...
          <br/>
          <br/>
          Finally it dawned on me - I want to make web applications that're easy to use, that actually work, and that *gasp* look nice.  With the help of <a href="https://open.appacademy.io/">App Academy Open</a>,
          I've been able to teach myself to do that.
        </p>
        <div id="headshot-container"><img id="headshot" src="./misc_images/headshot.png" alt="Headshot of Aaron Parisi"/></div>
      </div>
    </div>
  )
}

export default About
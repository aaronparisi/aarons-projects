import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

const StyledDiv = styled.div`
  opacity: ${props => props.theme.opacity}%;
  visibility: ${props => props.theme.visibility};
  transition: opacity 1.5s ease-in-out;
  display: ${props => props.theme.display};
`

const About = ({ theme }) => {
  return (
    <ThemeProvider theme={theme} >
      <StyledDiv id="about">
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
      </StyledDiv>
    </ThemeProvider>
  )
}

export default About
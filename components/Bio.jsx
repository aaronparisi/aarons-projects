import React from 'react'
import { ThemeProvider } from 'styled-components'
import About from './About'
import * as StyledComps from './Styled'

import styled from 'styled-components'

const StyledH1 = styled.h1`
  opacity: ${props => props.theme.opacity}%;
  visibility: ${props => props.theme.visibility};
  transition: opacity 1s ease-in-out;
`

const StyledH2 = styled.h2`
  opacity: ${props => props.theme.opacity}%;
  visibility: ${props => props.theme.visibility};
  transition: opacity 1s ease-in-out;
`

const StyledP = styled.p`
  opacity: ${props => props.theme.opacity}%;
  visibility: ${props => props.theme.visibility};
  transition: opacity 1s ease-in-out;
`

const StyledButton = styled.button`
  opacity: ${props => props.theme.opacity}%;
  visibility: ${props => props.theme.visibility};
  transition: opacity 1s ease-in-out;
`

const Bio = ({ delayedStatus }) => {
  const delayedTheme = {
    visibility: delayedStatus,
    opacity: (delayedStatus === 'hidden') ? 0 : 100
  }
  
  return (
    <div id="bio">
      <h4 id="greeting">Hi, my name is<span id="blinking-cursor" className="blinked-on">&#9646;</span></h4>

      <ThemeProvider theme={delayedTheme}>
        <StyledH1
        >
          Aaron Parisi.
        </StyledH1>
      </ThemeProvider>

      <ThemeProvider theme={delayedTheme}>
        <StyledH2
        >
          I like to make websites.
        </StyledH2>
      </ThemeProvider>

      <ThemeProvider theme={delayedTheme}>
        <StyledP
          id="blurb"
        >
          I am a web developer based in Seattle, WA, with a passion for making wep applications that people actually look forward to using.
        </StyledP>
      </ThemeProvider>

      <ThemeProvider theme={delayedTheme}>
        <StyledButton
          className="email-button"
        >
          <a href="mailto: parisi.aaron@gmail.com">Get in Touch</a>
        </StyledButton>
      </ThemeProvider>

      <About 
        // visible={true}
      />
    </div>
  )
}

export default Bio
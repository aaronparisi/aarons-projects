import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import About from './About'

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
  transition: opacity 1.5s ease-in-out;
`

const StyledButton = styled.button`
  opacity: ${props => props.theme.opacity}%;
  visibility: ${props => props.theme.visibility};
  transition: opacity 1.5s ease-in-out;
`
const StyledH4 = styled.h4`
  color: ${props => props.theme.color};
  transition: ${props => props.theme.transition};
  margin-top: ${props => props.theme.marginTop}px;
`

class Bio extends React.Component {
  constructor({ terminalTheme, titleTheme, subtitleTheme, blurbTheme, emailButtonTheme, writtenText }) {
    super({ terminalTheme, titleTheme, subtitleTheme, blurbTheme, emailButtonTheme, writtenText })
    // todo this doesn't need to be a class anymore?
  }
  
  render() {
    return (
      <div id="bio">
        <ThemeProvider theme={this.props.terminalTheme}>
          <StyledH4 id="greeting">
            <span id="typewriter-text">&#62;{this.props.writtenText}</span><span id="blinking-cursor" className="blinked-on">&#9646;</span>
          </StyledH4>
        </ThemeProvider>
  
        <ThemeProvider theme={this.props.titleTheme}>
          <StyledH1
          >
            Aaron Parisi.
          </StyledH1>
        </ThemeProvider>
  
        <ThemeProvider theme={this.props.subtitleTheme}>
          <StyledH2
          >
            I like to make websites.
          </StyledH2>
        </ThemeProvider>
  
        <ThemeProvider theme={this.props.blurbTheme}>
          <StyledP
            id="blurb"
          >
            I am a web developer based in Seattle, WA, with a passion for making wep applications that even my parents could use.
          </StyledP>
        </ThemeProvider>
  
        <ThemeProvider theme={this.props.emailButtonTheme}>
          <StyledButton
            className="email-button"
          >
            <a href="mailto: parisi.aaron@gmail.com">Get in Touch</a>
          </StyledButton>
        </ThemeProvider>
  
        <About theme={this.props.notDisplayedTheme}/>
      </div>
    )
  }
}

export default Bio
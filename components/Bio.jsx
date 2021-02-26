import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import About from './About'

const StyledH1 = styled.h1`
  opacity: ${props => props.theme.opacity}%;
  visibility: ${props => props.theme.visibility};
  transition: opacity 1.5s ease-in-out;
`

const StyledH2 = styled.h2`
  opacity: ${props => props.theme.opacity}%;
  visibility: ${props => props.theme.visibility};
  transition: opacity 1.5s ease-in-out;
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
class Bio extends React.Component {
  constructor({ titleTheme, subtitleTheme, blurbTheme, emailButtonTheme, writtenText }) {
    super({ titleTheme, subtitleTheme, blurbTheme, emailButtonTheme, writtenText })
    // todo this doesn't need to be a class anymore?
  }
  
  render() {
    return (
      <div id="bio">
        <h4 id="greeting"><span id="typewriter-text">{this.props.writtenText}</span><span id="blinking-cursor" className="blinked-on">&#9646;</span></h4>
  
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
            I am a web developer based in Seattle, WA, with a passion for making wep applications that people actually look forward to using.
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
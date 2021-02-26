import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import About from './About'

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
class Bio extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      titleTheme: {
        visibility: 'hidden',
        opacity: 0
      },
      blurbTheme: {
        visibility: 'hidden',
        opacity: 0
      },
      emailButtonTheme: {
        visibility: 'hidden',
        opacity: 0
      }
    }

    this.titleTimeout = this.titleTimeout.bind(this)
    this.blurbTimeout = this.blurbTimeout.bind(this)
    this.emailButtonTimeout = this.emailButtonTimeout.bind(this)
  }

  componentDidMount() {
    this.titleTimeout()
    this.blurbTimeout()
    this.emailButtonTimeout()
  }

  titleTimeout() {
    setTimeout(() => {
      let titleTheme = {...this.state.titleTheme}
      titleTheme.visibility = 'visible'
      titleTheme.opacity = 100
      this.setState({titleTheme})
    }, 2000);
  }
  
  blurbTimeout() {
    setTimeout(() => {
      let blurbTheme = {...this.state.blurbTheme}
      blurbTheme.visibility = 'visible'
      blurbTheme.opacity = 100
      this.setState({blurbTheme})
    }, 3000);
  }

  emailButtonTimeout() {
    setTimeout(() => {
      let emailButtonTheme = {...this.state.emailButtonTheme}
      emailButtonTheme.visibility = 'visible'
      emailButtonTheme.opacity = 100
      this.setState({emailButtonTheme})
    }, 4000);
  }
  
  render() {
    return (
      <div id="bio">
        <h4 id="greeting">Hi, my name is<span id="blinking-cursor" className="blinked-on">&#9646;</span></h4>
  
        <ThemeProvider theme={this.state.titleTheme}>
          <StyledH1
          >
            Aaron Parisi.
          </StyledH1>
        </ThemeProvider>
  
        <ThemeProvider theme={this.state.titleTheme}>
          <StyledH2
          >
            I like to make websites.
          </StyledH2>
        </ThemeProvider>
  
        <ThemeProvider theme={this.state.blurbTheme}>
          <StyledP
            id="blurb"
          >
            I am a web developer based in Seattle, WA, with a passion for making wep applications that people actually look forward to using.
          </StyledP>
        </ThemeProvider>
  
        <ThemeProvider theme={this.state.emailButtonTheme}>
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
}

export default Bio
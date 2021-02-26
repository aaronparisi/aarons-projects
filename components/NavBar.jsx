import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import Logo from './Logo'

const StyledNav = styled.nav`
  opacity: ${props => props.theme.opacity}%;
  visibility: ${props => props.theme.visibility};
  transition: opacity 1.5s ease-in-out;
`

class NavBar extends React.Component {
  constructor({ theme }) {
    super({ theme })
  }

  render() {
    return (
      <ThemeProvider theme={this.props.theme}>
        <StyledNav>
          <Logo />
    
          <div className="page-links">
            <a href="#about">About.</a>
            <a href="#projects-displays-container">Projects.</a>
            <a href="#contact-form">Contact.</a>
          </div>
    
          <div className="navlinks">
            <a href="https://github.com/aaronparisi" target="_blank"><img className="navlink-icon link-icon" src="./icons/github.png" alt="github icon"/></a>
            <a href="https://www.linkedin.com/in/aaron-parisi/" target="_blank"><img className="navlink-icon link-icon" src="./icons/linkedin.png" alt="linkedin icon"/></a>
            <a href="mailto: parisi.aaron@gmail.com"><img className="navlink-icon link-icon" src="./icons/email.png" alt="email icon"/></a>
            <a href="./pdfs/aaron_parisi_resume.pdf" target="_blank"><img className="navlink-icon link-icon" src="./icons/resume.png" alt="resume icon"/></a>
          </div>
        </StyledNav>
      </ThemeProvider>
    )
  }
}

export default NavBar
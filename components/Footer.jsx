import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

const StyledUl = styled.ul`
  opacity: ${props => props.theme.opacity}%;
  visibility: ${props => props.theme.visibility};
  transition: opacity 1.5s ease-in-out;
  display: ${props => props.theme.display};
`

const Footer = ({ theme }) => {
  return (
    <ThemeProvider theme={theme} >
      <StyledUl
        className="footer footer-links"
      >
        <li>Design inspired by <a href="https://brittanychiang.com/"> Brittany Chiang</a>.</li>
        <li>Blinking Cursor inspired by <a href="https://codepen.io/ArtemGordinsky"> Artem Gordinsky</a>.</li>
        <li>Icons courtesy of <a href="https://icons8.com/icons/"> Icons8</a>.</li>
        <li>Icon filters courtesy of <a href="https://codepen.io/sosuke"> Barrett Sonntag</a>.</li>
      </StyledUl>
    </ThemeProvider>
  )
}

export default Footer
import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

const StyledP = styled.p`
  opacity: ${props => props.theme.opacity}%;
  visibility: ${props => props.theme.visibility};
  transition: opacity 1.5s ease-in-out;
  display: ${props => props.theme.display};
`

const Footer = ({ theme }) => {
  return (
    <ThemeProvider theme={theme} >
      <StyledP
        className="footer"
      >
        Design inspired by <a href="https://brittanychiang.com/"> Brittany Chiang</a> | Blinking Cursor inspired by <a href="https://codepen.io/ArtemGordinsky"> Artem Gordinsky</a> | Icons courtesy of <a href="https://icons8.com/icons/"> Icons8</a> | Icon filters courtesy of <a href="https://codepen.io/sosuke"> Barrett Sonntag</a>
      </StyledP>
    </ThemeProvider>
  )
}

export default Footer
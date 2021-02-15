import React from 'react'

import Logo from './Logo'

const NavBar = () => {
  return (
    <nav>
      <Logo />

      <div className="navlinks">
        <a href="https://github.com/aaronparisi" target="_blank"><img className="navlink-icon link-icon" src="./icons/github.png" alt="github icon"/></a>
        <a href="https://www.linkedin.com/in/aaron-parisi/" target="_blank"><img className="navlink-icon link-icon" src="./icons/linkedin.png" alt="linkedin icon"/></a>
        <a href="mailto: parisi.aaron@gmail.com"><img className="navlink-icon link-icon" src="./icons/email.png" alt="email icon"/></a>
      </div>
    </nav>
  )
}

export default NavBar
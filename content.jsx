import React from 'react'

import NavBar from './components/NavBar'
import ProjectLink from './components/ProjectLink'

const Content = () => {
  return (
    <div>
      <NavBar />
      <div className="project-link">
        <ProjectLink projTitle="Towers of Hanoi"/>
        <ProjectLink projTitle="Todos"/>
        <ProjectLink projTitle="TicTacToe"/>
      </div>
    </div>
  )
}

export default Content
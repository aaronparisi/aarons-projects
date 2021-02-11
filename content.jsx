import React from 'react'

import NavBar from './components/NavBar'
import ProjectLink from './components/ProjectLink'

const Content = () => {
  return (
    <div>
      <NavBar />
      <div className="project-links">
        <ProjectLink projTitle="Towers of Hanoi" imageUrl="./thumbnails/Towers.png"/>
        <ProjectLink projTitle="Todos" imageUrl="./thumbnails/Todos.png"/>
        <ProjectLink projTitle="TicTacToe" imageUrl="./thumbnails/TicTacToe.png"/>
      </div>
    </div>
  )
}

export default Content
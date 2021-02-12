import React from 'react'

import NavBar from './components/NavBar'
import ProjectLink from './components/ProjectLink'

const Content = () => {
  return (
    <div className="content">
      <NavBar />
      <div className="project-links">
        <ProjectLink projTitle="Towers of Hanoi" imageUrl="./thumbnails/Towers.png" url="https://towers-of-hanoi-e1df0.web.app/"/>
        <ProjectLink projTitle="Todos" imageUrl="./thumbnails/Todos.png" url=""/>
        <ProjectLink projTitle="TicTacToe" imageUrl="./thumbnails/TicTacToe.png" url="https://tictactoe-32141.web.app/"/>
      </div>
    </div>
  )
}

export default Content
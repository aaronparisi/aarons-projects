import React from 'react'

import NavBar from './components/NavBar'
import ProjectDisplay from './components/ProjectDisplay'

const Content = () => {
  return (
    <div className="content">
      <NavBar />
      <div className="project-displays">
        <ProjectDisplay projTitle="Towers of Hanoi" imageUrl="./thumbnails/Towers.png" url="https://towers-of-hanoi-e1df0.web.app/"/>
        <ProjectDisplay projTitle="Todos" imageUrl="./thumbnails/Todos.png" url=""/>
        <ProjectDisplay projTitle="TicTacToe" imageUrl="./thumbnails/TicTacToe.png" url="https://tictactoe-32141.web.app/"/>
      </div>
    </div>
  )
}

export default Content
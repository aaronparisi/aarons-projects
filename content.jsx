import React from 'react'

import NavBar from './components/NavBar'
import ProjectDisplay from './components/ProjectDisplay'

const Content = () => {
  return (
    <div className="content">
      <NavBar />
      <div className="project-displays">
        <ProjectDisplay
          projTitle="Towers of Hanoi"
          imageUrl="./thumbnails/Towers.png"
          url="https://towers-of-hanoi-e1df0.web.app/"
          description="Are you smarter than a boot-camper? See if you can complete this classic game in fewer moves than the recursive AI."
          techs={["jQuery"]}
        />
        <ProjectDisplay
          projTitle="Todos"
          imageUrl="./thumbnails/Todos.png"
          url=""
          description="Overwhelmed by your galactic conquests? Keep track of your tasks with this easy-to-use todo list featuring task-reordering and color-coded completion. It is your destiny."
          techs={["Rails", "React", "Redux", "PostgreSQL"]}
        />
        <ProjectDisplay
          projTitle="TicTacToe"
          imageUrl="./thumbnails/TicTacToe.png"
          url="https://tictactoe-32141.web.app/"
          description="No more wasted paper or yucky chalk dust with this sleek, reset-able rendition of your favorite childhood game. No cheating allowed (or possible)."
          techs={["Ruby", "JavaScript"]}
        />
      </div>
    </div>
  )
}

export default Content
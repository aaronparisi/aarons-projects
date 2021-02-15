import React from 'react'

import NavBar from './components/NavBar'
import Bio from './components/Bio'
import ProjectDisplay from './components/ProjectDisplay'

const Content = () => {
  return (
    <div className="content">
      <NavBar />
      <Bio />
      <div className="project-displays">
        <ProjectDisplay
          projTitle="Towers of Hanoi"
          imageUrl="./thumbnails/Towers.png"
          pageUrl="https://towers-of-hanoi-e1df0.web.app/"
          gitUrl="https://github.com/aaronparisi/Towers-of-Hanoi-jQuery"
          description="Are you smarter than a boot-camper? See if you can complete this classic game in fewer moves than the recursive AI."
          techs={["jQuery"]}
        />
        <ProjectDisplay
          projTitle="Todos"
          imageUrl="./thumbnails/Todos.png"
          pageUrl=""
          gitUrl="https://github.com/aaronparisi/Todo-List-Rails-React-Redux"
          description="Overwhelmed by your galactic conquests? Keep track of your tasks with this easy-to-use todo list featuring task-reordering and color-coded completion. It is your destiny."
          techs={["Rails", "React", "Redux", "PostgreSQL"]}
        />
        <ProjectDisplay
          projTitle="TicTacToe"
          imageUrl="./thumbnails/TicTacToe.png"
          pageUrl="https://tictactoe-32141.web.app/"
          gitUrl="https://github.com/aaronparisi/TicTacToe"
          description="No more wasted paper or yucky chalk dust with this sleek, reset-able rendition of your favorite childhood game. No cheating allowed (or possible)."
          techs={["Ruby", "JavaScript"]}
        />
      </div>
    </div>
  )
}

export default Content
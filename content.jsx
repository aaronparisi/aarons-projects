import React from 'react'

import NavBar from './components/NavBar'
import Bio from './components/Bio'
import ProjectDisplay from './components/ProjectDisplay'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

const Content = () => {
  return (
    <div className="content">
      <NavBar />
      <Bio />
      
      <h1 id="projects-header">My Projects</h1>
      <div id="project-displays">
        <ProjectDisplay
          projTitle="Towers of Hanoi"
          imageUrl="./thumbnails/Towers.png"
          pageUrl="https://towers-of-hanoi-e1df0.web.app/"
          // pageUrl="http://www.towers.aaronparisidev.com"
          gitUrl="https://github.com/aaronparisi/Towers-of-Hanoi-jQuery"
          description="Are you smarter than a boot-camper? See if you can complete this classic game in fewer moves than the recursive AI."
          techs={["jQuery"]}
        />
        <ProjectDisplay
          projTitle="Todos"
          imageUrl="./thumbnails/Todos.png"
          pageUrl="https://aarons-todos.herokuapp.com/"
          // pageUrl="http://www.todos.aaronparisidev.com"  // ? can I make this secure?
          gitUrl="https://github.com/aaronparisi/Todo-List-Rails-React-Redux"
          description="Overwhelmed by your galactic conquests? Keep track of your tasks with this easy-to-use todo list featuring task-reordering and color-coded completion. It is your destiny."
          techs={["Rails", "React", "Redux", "PostgreSQL", "Webpacker"]}
        />
        <ProjectDisplay
          projTitle="TicTacToe"
          imageUrl="./thumbnails/TicTacToe.png"
          pageUrl="https://tictactoe-32141.web.app/"
          // pageUrl="http://www.tictactoe.aaronparisidev.com"
          gitUrl="https://github.com/aaronparisi/TicTacToe"
          description="No more wasted paper or yucky chalk dust with this sleek, reset-able rendition of your favorite childhood game. No cheating allowed (or possible)."
          techs={["Ruby", "JavaScript"]}
        />
        {/* <ProjectDisplay
          projTitle="Minesweeper"
          imageUrl="./thumbnails/minesweeper.png"
          // pageUrl="https://minesweeper-39691.web.app/"
          pageUrl="https://www.minesweeper.aaronparisidev.com"
          gitUrl="https://github.com/aaronparisi/Minesweeper"
          description="Just when you thought the world had enough basic version of this endlessly annoying game...  No need to thank me."
          techs={["Ruby", "JavaScript"]}
        /> */}
      </div>

      <ContactForm />

      <Footer />
    </div>
  )
}

export default Content
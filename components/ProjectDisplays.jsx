import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import ProjectDisplay from './ProjectDisplay'

const StyledDiv = styled.div`
  opacity: ${props => props.theme.opacity}%;
  visibility: ${props => props.theme.visibility};
  transition: opacity 1.5s ease-in-out;
`

class ProjectDisplays extends React.Component {
  constructor({ theme }) {
    super({ theme })
  }

  render() {
    return (
      <ThemeProvider theme={this.props.theme} >
        <StyledDiv id="projects-displays-container">
          <h1 id="projects-header">My Projects</h1>
          <div id="project-displays">
            <ProjectDisplay
              projTitle="Todos"
              imageUrl="./thumbnails/Todos.png"
              // pageUrl="https://aarons-todos.herokuapp.com/"
              pageUrl="http://www.todos.aaronparisidev.com"
              gitUrl="https://github.com/aaronparisi/Todo-List-Rails-React-Redux"
              description="Overwhelmed by your galactic conquests? Keep track of your tasks with this easy-to-use todo list featuring task-reordering and color-coded completion. It is your destiny."
              techs={["Rails", "React", "Redux", "PostgreSQL", "Webpacker"]}
            />
            <ProjectDisplay
              projTitle="Frontend Auth"
              imageUrl="./thumbnails/bluebird.png"
              pageUrl="https://www.frontend-auth.aaronparisidev.com/"
              gitUrl="https://github.com/aaronparisi/front-end-auth-demo-frontend"
              description="While not the most stunning application ever written (or even the most functinoal), this project was a configuration nightmare.  Separating frontend and Rails 6 API made implementing the session... well... let's just say there was a lot of googling involved."
              techs={["Rails6", "React", "Redux", "PostgreSQL"]}
            />
            <ProjectDisplay
              projTitle="Towers of Hanoi"
              imageUrl="./thumbnails/Towers.png"
              pageUrl="https://www.towers.aaronparisidev.com/"
              // pageUrl="http://www.towers.aaronparisidev.com"
              gitUrl="https://github.com/aaronparisi/Towers-of-Hanoi-jQuery"
              description="Are you smarter than a boot-camper? See if you can complete this classic game in fewer moves than the recursive AI."
              techs={["jQuery"]}
            />
            <ProjectDisplay
              projTitle="TicTacToe"
              imageUrl="./thumbnails/TicTacToe.png"
              // pageUrl="https://tictactoe-32141.web.app/"
              pageUrl="https://www.tictactoe.aaronparisidev.com"
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
        </StyledDiv>
      </ThemeProvider>
    )
  }
}

export default ProjectDisplays
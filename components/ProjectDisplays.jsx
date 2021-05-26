import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import ProjectDisplay from './ProjectDisplay'

const StyledDiv = styled.div`
  opacity: ${props => props.theme.opacity}%;
  visibility: ${props => props.theme.visibility};
  transition: opacity 1.5s ease-in-out;
  display: ${props => props.theme.display}
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
              projTitle="Springfield BnB"
              imageUrl="./thumbnails/marge.png"
              pageUrl="http://www.springfield-bnb.aaronparisidev.com"
              gitUrl="https://github.com/aaronparisi/Springfield-BnB-Frontend.git"
              description="Duhhh duhh duh da-duhhhhh duh duh da-dun-nuh-nuh-nuhh..."
              techs={["Rails", "React", "Redux", "Amazon S3 Storage", "Axios"]}
            />
            <ProjectDisplay
              projTitle="Candie's Swingin' 70th"
              imageUrl="./thumbnails/candie.png"
              pageUrl="http://www.candies-70th.aaronparisidev.com/1"
              gitUrl="https://github.com/aaronparisi/candies-70th-frontend"
              description="My friend's mom is turning 70!  Check out the details in this Wix clone, featuring improvements to the navbar visibility &amp; animation, costume inspiration sliders, and overlay RSVP form.  P.S. Please do not attempt to attend the party..."
              techs={["React"]}
            />
            <ProjectDisplay
              projTitle="Jeerkat Clock"
              imageUrl="./thumbnails/jeerkat.png"
              pageUrl="http://www.jeerkat-js.aaronparisidev.com"
              gitUrl="https://github.com/aaronparisi/JS-Jeerkat-Clock"
              description="Schedule your day with these vanilla JavaScript critters!"
              techs={["JavaScript"]}
            />
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
              description="Is THIS why the birds are so angry?? This project may not do much, but it was a configuration nightmare.  Building a React+Redux frontend on top of a standalone Rails 6 API made implementing the session... yea... And let's not talk about * rubs temples * deployment."
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
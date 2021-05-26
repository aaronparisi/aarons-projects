import React, { useState } from 'react'
import NavBar from './components/NavBar'
import Bio from './components/Bio'
import ProjectDisplays from './components/ProjectDisplays'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

class Content extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      titleTheme: {
        visibility: 'hidden',
        opacity: 0
      },
      subtitleTheme: {
        visibility: 'hidden',
        opacity: 0
      },
      blurbTheme: {
        visibility: 'hidden',
        opacity: 0
      },
      delayedTheme: {
        visibility: 'hidden',
        opacity: 0,
        width: '0%'
      },
      notDisplayedTheme: {
        display: 'none',
        visibility: 'hidden',
        opacity: 0
      },
      terminalTheme: {
        color: '#14a098',
        transition: 'color 0s ease-out',
        marginTop: 0
      },
      typewriterText: " Hi, my name is",
      writtenText: ""
    }

    // todo i'm surprised it didn't yell at me for not binding functions...
  }

  /*
  option 1: flash terminal, 0s delay for h1, blurb and nav come in at same time
  option 2: no flash, 1s delay for h1, blurb comes in before nav
  */

  componentDidMount() {
    setTimeout(() => {
      // this.linksTimeout()  // delete this line later
      this.typeTextLoop(0)
      .then(
        msg => {
          this.titleTimeout()
          this.subtitleTimeout()
          this.blurbTimeout()
          this.linksTimeout()
          this.restTimeout()
        },
        err => {
          console.log('error running then block')
        }
      )
    }, 500);
  }

  typeTextLoop(idx) {
    return new Promise((resolve, reject) => {
      if (idx < this.state.typewriterText.length) {
        setTimeout(() => {
          this.setState({ writtenText: this.state.writtenText + this.state.typewriterText[idx]})
          this.typeTextLoop(idx+1)
          .then(() => resolve('done'))
        }, 50)
      } else {
        resolve('done')
      }
    })
  }

  flashTerminal() {
    // change color to bright
    setTimeout(() => {
      let terminalTheme = {...this.state.terminalTheme}
      terminalTheme.color = '#c5fffc'
      terminalTheme.transition = 'color 0s ease-out'
      // terminalTheme.marginTop = this.state.terminalTheme.marginTop - 33
      let newWritten = this.state.writtenText + '\n>'
      this.setState({writtenText: newWritten, terminalTheme})

      setTimeout(() => {
        // change back to dark
        let terminalTheme = {...this.state.terminalTheme}
        terminalTheme.color = '#14a098',
        terminalTheme.transition = 'color .5s ease-out'
        this.setState({terminalTheme})
      }, 100);
      // * this is ugly
    }, 1500);
  }
  
  titleTimeout() {
    setTimeout(() => {
      let titleTheme = {...this.state.titleTheme}
      titleTheme.visibility = 'visible'
      titleTheme.opacity = 100

      // this.flashTerminal()
      this.setState({titleTheme })
    }, 1000);
  }

  subtitleTimeout() {

    setTimeout(() => {
      let subtitleTheme = {...this.state.subtitleTheme}
      subtitleTheme.visibility = 'visible'
      subtitleTheme.opacity = 100

      // this.flashTerminal()
      this.setState({subtitleTheme})
    }, 2000);
  }
  
  blurbTimeout() {
    setTimeout(() => {
      let blurbTheme = {...this.state.blurbTheme}
      blurbTheme.visibility = 'visible'
      blurbTheme.opacity = 100
      this.setState({blurbTheme})
    }, 3000);
  }

  linksTimeout() {
    setTimeout(() => {
      let delayedTheme = {...this.state.delayedTheme}
      delayedTheme.visibility = 'visible'
      delayedTheme.opacity = 100
      delayedTheme.width = '100%'
      this.setState({delayedTheme})
    }, 4000);  // this should be 4000 when you're done developing the nav bar
  }

  restTimeout() {
    setTimeout(() => {
      let notDisplayedTheme = {...this.state.notDisplayedTheme}
      notDisplayedTheme.visibility = 'visible'
      notDisplayedTheme.opacity = 100
      notDisplayedTheme.display = 'flex'
      this.setState({notDisplayedTheme})
    }, 4000);
  }

  render() {
    return (
      <div className="content">
        <NavBar theme={this.state.delayedTheme}/>
        <div className="main-content">
          <Bio
            terminalTheme={this.state.terminalTheme}
            titleTheme={this.state.titleTheme}
            subtitleTheme={this.state.subtitleTheme} 
            blurbTheme={this.state.blurbTheme}
            emailButtonTheme={this.state.delayedTheme}
            writtenText={this.state.writtenText}
            notDisplayedTheme={this.state.notDisplayedTheme}
          />

          <ProjectDisplays theme={this.state.notDisplayedTheme} />
    
          <ContactForm theme={this.state.notDisplayedTheme}/>
    
          <Footer theme={this.state.notDisplayedTheme}/>
        </div>
      </div>
    )
  }
}

export default Content
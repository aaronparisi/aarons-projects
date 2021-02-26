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
        opacity: 0
      },
      notDisplayedTheme: {
        display: 'none',
        visibility: 'hidden',
        opacity: 0
      },
      typewriterText: "Hi, my name is",
      writtenText: ""
    }
  }

  componentDidMount() {
    setTimeout(() => {
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
    }, 2500);
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

  titleTimeout() {
    setTimeout(() => {
      let titleTheme = {...this.state.titleTheme}
      titleTheme.visibility = 'visible'
      titleTheme.opacity = 100
      this.setState({titleTheme})
    }, 1000);
  }

  subtitleTimeout() {
    setTimeout(() => {
      let subtitleTheme = {...this.state.subtitleTheme}
      subtitleTheme.visibility = 'visible'
      subtitleTheme.opacity = 100
      this.setState({subtitleTheme})
    }, 2500);
  }
  
  blurbTimeout() {
    setTimeout(() => {
      let blurbTheme = {...this.state.blurbTheme}
      blurbTheme.visibility = 'visible'
      blurbTheme.opacity = 100
      this.setState({blurbTheme})
    }, 4000);
  }

  linksTimeout() {
    setTimeout(() => {
      let delayedTheme = {...this.state.delayedTheme}
      delayedTheme.visibility = 'visible'
      delayedTheme.opacity = 100
      this.setState({delayedTheme})
    }, 8000);
  }

  restTimeout() {
    setTimeout(() => {
      let notDisplayedTheme = {...this.state.notDisplayedTheme}
      notDisplayedTheme.visibility = 'visible'
      notDisplayedTheme.opacity = 100
      notDisplayedTheme.display = 'flex'
      this.setState({notDisplayedTheme})
    }, 8000);
  }

  render() {
    return (
      <div className="content">
        <NavBar theme={this.state.delayedTheme}/>
        <Bio
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
    )
  }
}

export default Content
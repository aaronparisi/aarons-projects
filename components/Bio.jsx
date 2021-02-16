import React from 'react'

const Bio = () => {
  return (
    <div id="bio">
      <h4 id="greeting">Hi, my name is<span className="blinking-cursor">&#9646;</span></h4>
      <h1>Aaron Parisi.</h1>
      <h2>I like to make websites.<br/>
        {/* <span id="pretty">look pretty</span>,<br/>
        <span id="easy">feel easy</span>, & <br/>
        <span id="function">function well</span>. */}
      </h2>
      <p id="blurb">I am a web developer based in Seattle, WA, with a passion for making websites that look beautiful, feel easy, and function well.  
      I want to help build wep applications that people actually look forward to using.</p>

      <button id="email-button">
        <a href="mailto: parisi.aaron@gmail.com">Get in Touch</a>
      </button>

      <div id="about">
        <h3 id="about-header">About me:</h3>
        <div id="about-content">
          <p id="about-paragraph">
            After graduating with a degree in mathematics from <a href="https://www.hartwick.edu/">Hartwick College</a> with degrees in Mathematics and Economics in 2014,
            I taught AP Calculus BC, Multivariable Calculus, and Statistics at <a href="https://www.salisburyschool.org/">Salisbury School</a>.
            Although I loved helping others understand difficult concepts, I missed creating and expressing ideas of my own.
            That plus the rural Connecticut winters made me want to find new challenges...
            After five years of tinkering with programming here and there, I was working
            a job at a <a href="https://www.1031services.com/">1031 exchange company</a>.
            I was able to use <a href="https://support.microsoft.com/en-us/office/quick-start-create-a-macro-741130ca-080d-49f5-9471-1e5fb3d581a8">Excel Macros</a> and <a href="https://www.autohotkey.com/">AutoHotkey</a> to automate and streamline a few things, but I wasn't able to actually change the software we were using.
            I realized making software more intuitive and user-friendly was a passion.  With the help of <a href="https://open.appacademy.io/">App Academy Open</a>,
            I've been able to teach myself the skills to do that.
          </p>
          <div id="headshot-container"><img id="headshot" src="./misc_images/headshot.png" alt="Headshot of Aaron Parisi"/></div>
        </div>
      </div>
    </div>
  )
}

export default Bio
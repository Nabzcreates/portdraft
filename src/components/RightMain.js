import React from 'react'
import Projects from './Projects'

export default function RightMain() {
  return (
  <div className="rightMain">
    <h1 className="project_title">Projects</h1>

    <Projects href="https://beatboxbynabz.netlify.app/" title="Beatbox" src="./images/beatbox.jpg"/>
    <Projects href="https://tipcalculaterbynabz.netlify.app" title="Tip Calculator" src="./images/tip.png"/>
    <Projects href="https://weatherappbynabz.netlify.app/" title="Weather App" src="./images/weatherApp.jpg"/>
    <Projects href="https://guessthenumberbynabz.netlify.app" title="Game: Guess-the-number" src="./images/guess.jpg"/>
    <Projects href="https://exercisetexteditor.netlify.app" title="Text Editor" src="./images/text.png"/>

  </div>
  )
}

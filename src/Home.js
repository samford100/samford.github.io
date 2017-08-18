import React, {Component} from 'react'
import SampleWorks from './SampleWorks'
import Resume from './Resume'
import Bio from './Bio'
import Contact from './Contact'
import Education from './Education.js'
import Experience from './Experience.js'
import {Link} from 'react-router'
import './style.css'


export default class Home extends React.Component {
  render() {
    return (
      <div>
        <a name="home"></a>
        <TitlePicture />
        <Bio />
        <Education />
        <Experience />
        <SampleWorks />
        <Resume />
        <Contact  />
      </div>
    )
  }
}

class TitlePicture extends Component {
  render() {
    return (
      <div className="parent">
        <div className="figure">
          <img src="./assets/cliffs.png" />
          <div className="figcaption">
            <h1>
              <span>Sam Ford</span>
            </h1>
            <h2>
              <span>Software Engineer</span>
            </h2>
          </div>
          <div className="fig-nav">
              <a href="#bio"><strong>Bio&nbsp;&nbsp; </strong></a>
              <a href="#education"><strong>Education&nbsp;&nbsp; </strong></a>
              <a href="#experience"><strong>Experience&nbsp;&nbsp; </strong></a>
              <a href="#sampleworks"><strong>Sample Works&nbsp;&nbsp; </strong></a>
              <a href="#resume"><strong>Resume&nbsp;&nbsp; </strong></a>
              <a href="#contact"><strong>Contact&nbsp;&nbsp; </strong></a>
          </div>
        </div>
      </div>
    )
  }
}



class Pictures extends Component {
  render() {
    return (
      <div className="parent">
        <img className="bobbydodd" src="../assets/bobbydodd.jpg" height="100%" width="100%" />
        <img className="headshot" src="../assets/headshot.jpg" height="20%" width="20%" />
      </div>
    )
  }
}

class Info extends Component {
  render() {
    return (
      <div className="info">
      <p>
        <strong className="name">Welcome</strong> to my page! My name is Sam Ford and
        I am a 4th year student at the Georgia Institute of Technology pursuing a
        Computer Science degree with a minor in Economics.
        My areas of concentration are Artificial Intelligence and Modeling/Simulation,
        with a serious interest in Machine Learning.
      </p>
      </div>
    )
  }
}

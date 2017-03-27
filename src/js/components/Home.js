import React, {Component} from 'react'
import SampleWorks from './SampleWorks'
import Resume from './Resume'
import Bio from './Bio'
import Contact from './Contact'
import Education from './Education.js'
import Experience from './Experience.js'

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <TitlePicture />
        <Bio />
        <Education />
        <Experience />
        <SampleWorks />
        <Resume />
        <Contact />
      </div>
    )
  }
}

class NavBar extends React.Component{
  render() {
    return (
      <nav class="navbar navbar-inverse">
        <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <div class="collapse navbar-collapse" id="myNavbar">
            <ul class="nav navbar-nav">
              <li class="active"><a href="#">Home</a></li>
              <li><a href="#">Page 2</a></li>
              <li><a href="#">Page 3</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
};

class TitlePicture extends Component {
  render() {
    return (
      <div class="parent">
        <div class="figure">
          <img src="./assets/cliffs.png" />
          <div class="figcaption">
            <h1>
              <span>Sam Ford</span>
            </h1>
            <h2>
              <span>Software Engineer</span>
            </h2>
          </div>
          <div class="fig-nav">
              <a href="#bio"><strong>Bio </strong></a>
              <a href="#education"><strong>Education </strong></a>
              <a href="#experience"><strong>Experience </strong></a>
              <a href="#sampleworks"><strong>Sample Works </strong></a>
              <a href="#resume"><strong>Resume </strong></a>
              <a href="#contact"><strong>Contact </strong></a>
          </div>
        </div>
      </div>
    )
  }
}



class Pictures extends Component {
  render() {
    return (
      <div class="parent">
        <img class="bobbydodd" src="../assets/bobbydodd.jpg" height="100%" width="100%" />
        <img class="headshot" src="../assets/headshot.jpg" height="20%" width="20%" />
      </div>
    )
  }
}

class Info extends Component {
  render() {
    return (
      <div class="info">
      <p>
        <strong class="name">Welcome</strong> to my page! My name is Sam Ford and
        I am a 4th year student at the Georgia Institute of Technology pursuing a
        Computer Science degree with a minor in Economics.
        My areas of concentration are Artificial Intelligence and Modeling/Simulation,
        with a serious interest in Machine Learning.
      </p>
      </div>
    )
  }
}

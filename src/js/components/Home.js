import React, {Component} from 'react'
import SampleWorks from './SampleWorks'
import Resume from './Resume'
import Bio from './Bio'


export default class Home extends React.Component {
  render() {
    return (
      <div>
        <TitlePicture />
        <Bio />
        <SampleWorks />
        <Resume />
      </div>
    )
  }
}

class TitlePicture extends Component {
  render() {
    return (
      <div class="parent figure">
        <img src="./assets/lax.jpg" />
        <div class="figcaption">
          <h1>
            <span>Sam Ford</span>
          </h1>
          <h2>
            <span>Software Engineer</span>
          </h2>
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

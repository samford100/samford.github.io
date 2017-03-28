import React from 'react'

export default class SampleWorks extends React.Component {
  constructor() {
    super()
    this.state = {
      block: null
    }
  }

  onHover = (props) => {
    // console.log("togglehover")
    // console.log(props)
    this.setState({
      block: {...props}
    })
    // console.log(this.state.block)
  }

  onExit = () => {
    // this.setState({
    //   block: null
    // })
  }

	render() {

    const personalDesc = <div class="work-block-text">
      <p>
        This is the site you are on! Everything here is built from scratch, using HTML,
        CSS, and Facebook''s React.</p>
        <p>I have completed several projects and feel very confindent using React and HTML
        to create high quality websites. For this project, I focused on improving my CSS skills,
        and did everything without Twitter Bootstrap training wheels.
        </p>

        <p>Click on the link to view all the source code!
      </p>
    </div>

    const savageDesc = <div class="work-block-text sav-text">
      <p>
      <strong>S</strong>calable <strong>A</strong>rchitexture and <strong>V</strong>isualization
      for <strong>A</strong>nomaly
      detection in power <strong>G</strong>enerating <strong>E</strong>nergy assets</p>

      <p>Power-generating assets (e.g., jet engines, gas turbines) are often instrumented
      with tens to hundreds of sensors for monitoring physical and performance degradation.
      This research project aims to detect, ingest, and visualize anomalies for people working
      in the field.</p>
      <p>Click the link to view the paper on arvix.
      </p>
    </div>

    const lionDesc = <div class="work-block-text">
      <p>
        This is my senior design project at Georgia Tech. </p>
        <p>Our team was contracted by the travel and
        expense management company Concur to create an incident management platform.
        With a consumer facing product, a company like Concur can really suffer
        if any of their services, e.g. databases,
        website, etc. are down too long. </p>
        <p>Our platform allows managers to create teams and
        set schedules for automatic "pinging" of an employee on call, so they can quickly
        fix the issue and reduce downtime for their customers. </p>
        <p>Click on the link to view the source code.

      </p>
    </div>

    const coursesDesc = <div class="work-block-text">
      <p>
        This site shows courses frequently taken by Professional Education students at Georgia Tech.
        I received anomymous student class data, and found common course sequences using
        using the PrefixSpan sequence mining algorithm. Advisors at the Professional Education
        school at Georgia Tech use this software to recommend classes for students based on classes
        their peers have taken.</p>
        <p>Click on the link to see it in action!
      </p>
    </div>


		return (
      <div class="sample-works">
      <a name="sampleworks"></a>
    		<h1 class="sample-works-header">Sample Works</h1>
        <div class="sample-work-blocks">
        <WorkBlock
          name="Personal Website"
          link="http://www.sam-ford.me"
          image="./assets/personalwebsite.png"
          description={personalDesc}
          color="#4E598C"
          onHover={this.onHover}
          onExit={this.onExit} />
        <WorkBlock
          name="SAVAGE"
          image="./assets/savage.jpg"
          description={savageDesc}
          link="https://arxiv.org/abs/1701.07500"
          color="#FFB86F"
          onHover={this.onHover}
          onExit={this.onExit} />
        <WorkBlock
          name="LION PING"
          image="./assets/lionping.png"
          link="https://github.com/jparkhurst3/Thundercats_LionPing"
          description={lionDesc}
          color="#EEB211"
          onHover={this.onHover}
          onExit={this.onExit} />
        <WorkBlock
          name="Class Sequences"
          image="./assets/courses2.png"
          description={coursesDesc}
          link="http://www.prism.gatech.edu/~sford34/StudentRecords/"
          color="#98C1D9"
          onHover={this.onHover}
          onExit={this.onExit} />
        </div>
        <WorkBlockInfo block={this.state.block} />
      </div>
		)
	}
}


class WorkBlockInfo extends React.Component {
  render() {
    if (!this.props.block) {
      return (
        <div></div>
      )
    }
    return (
      <div class="work-block-info">
        <img class="work-block-image" src={this.props.block.image} />
        <h2 style={{margin:"0px"}}><strong>{this.props.block.name}</strong></h2>
        {this.props.block.description}
      </div>
    )
  }
}
// <img class="work-block-image" src={this.props.block.image} />
// <h2><strong>{this.props.block.name}</strong></h2>
// <p class="work-block-text">{this.props.block.description}</p>

class WorkBlock extends React.Component {
  render() {
    return (
      <div class="work-block" style={{background:this.props.color}} onMouseEnter={(e) => this.props.onHover(this.props)} onMouseLeave={(e) => this.props.onExit()}  >
        <p class="work-block-header"><a class="work-block-link" href={this.props.link}><strong>{this.props.name}</strong></a></p>
      </div>
    )
  }
}

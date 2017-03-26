import React from 'react'

export default class SampleWorks extends React.Component {
  constructor() {
    super()
    this.state = {
      block: null
    }
  }

  onHover = (props) => {
    console.log("togglehover")
    // console.log(props)
    this.setState({
      block: {...props}
    })
    console.log(this.state.block)
  }

  onExit = () => {
    // this.setState({
    //   block: null
    // })
  }

	render() {
		return (
      <div class="sample-works">
  			<h1>Sample Works</h1>
        <WorkBlock
          name="Personal Website"
          link="google.com"
          image=""
          description="This is the site you are on!"
          color="blue"
          onHover={this.onHover}
          onExit={this.onExit} />
        <WorkBlock
          name="SAVAGE"
          image="./assets/savage.jpg"
          description="Power-generating assets (e.g., jet engines, gas turbines) are often instrumented with tens to hundreds of sensors for monitoring physical and performance degradation.
          This research project aims to detect and visualize anomalies for people working in the field. View the paper on arvix."
          link="https://arxiv.org/abs/1701.07500"
          color="gray"
          onHover={this.onHover}
          onExit={this.onExit} />
        <WorkBlock
          name="LION PING"
          image="./assets/lionping.png"
          link="https://github.com/jparkhurst3/Thundercats_LionPing"
          description="This is my senior design project. "
          color="red"
          onHover={this.onHover}
          onExit={this.onExit} />
        <WorkBlock
          name="Anotha One"
          image=""
          description=""
          link=""
          color="green"
          onHover={this.onHover}
          onExit={this.onExit} />
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
        <h2><strong>{this.props.block.name}</strong></h2>
        <p class="work-block-text">{this.props.block.description}</p>
      </div>
    )
  }
}

class WorkBlock extends React.Component {
  render() {
    return (
      <div class="work-block" style={{background:this.props.color}} onMouseEnter={(e) => this.props.onHover(this.props)} onMouseLeave={(e) => this.props.onExit()}  >
        <p class="work-block-header"><a class="work-block-link" href={this.props.link}><strong>{this.props.name}</strong></a></p>
      </div>
    )
  }
}

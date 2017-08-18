import React from 'react'
import './style.css'



export default class Resume extends React.Component {
	render() {
		return (
			<div className="resume">
			<a name="resume"></a>
				<h1 className="resume-header">Resume</h1>
				<div className="resume-holder">
					<embed className="resume" src="./assets/resume.pdf" width="100%" height="800px" />
				</div>
			</div>
		)
	}
}

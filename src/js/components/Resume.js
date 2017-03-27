import React from 'react'


export default class Resume extends React.Component {
	render() {
		return (
			<div class="resume">
			<a name="resume"></a>
				<h1 class="resume-header">Resume</h1>
				<div class="resume-holder">
					<embed class="resume" src="./assets/resume.pdf" width="100%" height="800px" />
				</div>
			</div>
		)
	}
}

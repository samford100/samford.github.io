import React from 'react'


export default class Resume extends React.Component {
	render() {
		return (
			<div class="resume">
				<h1 class="resume-header">Resume</h1>
				<embed class="resume" src="./assets/resume.pdf" width="100%" height="800px" />
			</div>
		)
	}
}

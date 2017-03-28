import React from 'react'

export default class Education extends React.Component {
	render() {
		return (
      <div class="education">
			<a name="education"></a>
			   <h1 class="education-header">Education</h1>
				 <div class="education-container">
					 <img class="education-top-img" src="./assets/lax.jpg" />
					 <div class="education-caption">
						 <h1>
							 <span>Georgia Institute of Technology</span>
						 </h1>
						 <h4>
							 <span>Bachelors of Science (BS) Computer Science, December 2017</span>
						 </h4>
						 <h4>
							 <span>Minor in Economics</span>
						 </h4>
					 </div>
				 </div>
         <img class="education-img" src="./assets/TechTowerWebsite2.jpg" />
				 <div class="education-text">
					 <p>Pursuing B.S in Computer Science with concentrations in Artificial Intelligence and Modeling/Simulation.</p>
					 <p>Overall GPA: 3.69</p>
					 <p><strong>Relevant Courses:</strong></p>
					 <Courses />
				 </div>

      </div>
		)
	}
}

class Courses extends React.Component {
	render() {
		// if (!this.props.hovered) {
		// 	return null
		// }
		return (
			<div class="courses">
				<ul>
					<li>Machine Learning, Knowledge Based Artificial Intelligence</li>
					<li>Data Structures and Algorithms, Algorithm Design and Analysis, Automata and Complexity Theory</li>
					<li>Discrete Math, Combinatorics, Graph Theory</li>
					<li>Computer Systems and Networks, Computer Organization, Digital System Design, High Performance Computing</li>
					<li>Differential Equations, Multivariable Calculus, Probability and Statistics, Economic and Financial Modeling</li>
				</ul>
			</div>
		)
	}
}

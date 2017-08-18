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
					 <p>Pursuing B.S in Computer Science with concentrations in Artificial
					 Intelligence and Modeling/Simulation and a minor in Economics</p>
					 <p>Overall GPA: 3.68</p>
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
		// return (
		// 	<div class="courses">
		// 		<ul>
		// 			<li>Machine Learning, Knowledge Based Artificial Intelligence, Data and Visual Analytics, Psychology of Sensation and Perception</li>
		// 			<li>Data Structures and Algorithms, Algorithm Design and Analysis, Automata and Complexity Theory</li>
		// 			<li>Discrete Math, Combinatorics, Graph Theory, Differential Equations, Multivariable Calculus, Probability and Statistics</li>
		// 			<li>High Performance Parallel Computing, Computer Systems, Networking, Computer Organization, Digital System Design</li>
		// 			<li>Economic and Financial Modeling, Econometrics, Advanced Macroeconomics</li>
		// 		</ul>
		// 	</div>
		// )

		return (
			<div class="courses">
				<h4>-- Artificial Intelligence --</h4>
					<p>Machine Learning, Knowledge Based Artificial Intelligence, Data and Visual Analytics, Psychology of Sensation and Perception</p>
				<h4>-- Computer Science Theory --</h4>
					<p>Data Structures and Algorithms, Algorithm Design and Analysis, Automata and Complexity Theory</p>
				<h4>-- Math --</h4>
					<p>Discrete Math, Combinatorics, Graph Theory, Differential Equations, Multivariable Calculus, Probability and Statistics</p>
				<h4>-- Computer Systems --</h4>
					<p>High Performance Parallel Computing, Computer Systems, Networking, Computer Organization, Digital System Design</p>
				<h4>-- Economics --</h4>
					<p>Economic and Financial Modeling, Econometrics, Advanced Macroeconomics</p>
			</div>
		)
	}
}

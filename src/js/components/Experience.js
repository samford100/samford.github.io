import React from 'react'

export default class Experience extends React.Component {
	render() {
    const qualcommDescripton = <div class="company-description">
      <p>Software engineering intern for Qualcomm in San Diego, Californina</p>
      <p>Worked on the modem team designing protocols making data calls</p>
      <p>Created tools to analyze and compare unit test results</p>
      <p>Gained experience and insight into the 5G evolution</p>
      <p>Collaborated with a fifteen person team to diagnose and solve issues</p>
      <p>Finalist in the intern hackathon creating a room utilization website</p>
    </div>

    const leanDescripton = <div class="company-description">
      <p>Software engineer for a basketball analytics startup</p>
      <p>Used by The University of North Carolina, Stanford, Michigan State, Georgia Tech, and several other colleges</p>
      <p>Implemented features on the frontend and backend using the MEAN stack</p>
      <p>Created a web-scrapping app to reduce game analysis time by upwards of 100%</p>
    </div>

    const researchDescripton = <div class="company-description">
      <p>Created visualization framework for anomaly detection in power generating assets</p>
      <p>Discovered class sequences typically taken by students in the professional education at Georgia Tech</p>
      <p>Created web application for administrators to suggest classes to students</p>
      <p>Set up a Hadoop/Spark cluster with hundreds of servers for machine learning and anomaly detection at Georgia Tech</p>
      <p>Worked under the direction and mentorship of Polo Chau</p>
    </div>

    const nsDescripton = <div class="company-description">
      <p>Created a process for tracking users and train crews</p>
      <p>Designed and implemented a system to manage the status of Norfolk Southern employees</p>
      <p>Met weekly with my team to keep track of sprint progress</p>
    </div>


		return (
      <div class="experience">
      <a name="experience"></a>
			   <h1 class="experience-header">Experience</h1>
				 <p class="experience-text">
				 	 <Company
            company="Qualcomm"
            title="Software Engineer Intern"
            image="./assets/companies/qualcomm.png"
            dates="May 2017 - August 2017"
            description={qualcommDescripton}
            tech="C++, Python, React, MongoDB, Heroku" />
           <Company
            company="Georgia Tech Research"
            title="Data Scientist, Software Engineer"
            image="./assets/companies/research.png"
            dates="March 2015 - Present"
            description={researchDescripton}
            tech="Javascript, React, Spark, Hadoop Ecosystem, AngularJS, HTML" />
           <Company
            company="Lean Basketball Analytics"
            title="Full Stack Software Engineer"
            image="./assets/companies/lean.png"
            dates="December 2014 - Present"
            description={leanDescripton}
            tech="MEAN Stack" />
           <Company
            company="Norfolk Southern"
            title="Content Manager Intern"
            image="./assets/companies/ns.png"
            dates="August 2014 - Decemeber 2014"
            description={nsDescripton}
            tech="Java" />


				  </p>
      </div>
		)
	}
}

// <span class="company-name"><strong>Georgia Tech Research</strong></span><br />
// <span class="company-name"><strong>LEAN Basketball Analytics</strong></span><br />
// <span class="company-name"><strong>Norfolk Southern</strong></span><br />

class Company extends React.Component {
  render() {
    return (
      <div>
        <div class="company-holder">
          <img class="company-img" src={this.props.image} /><br />
        </div>
        <div class="company-text">
          <p class="company-dates"><strong>{this.props.title} | {this.props.dates}</strong></p>
          {this.props.description}
          <p class="company-tech"><strong>Technologies Used: </strong>{this.props.tech}</p>
        </div>
      </div>

    )
  }
}

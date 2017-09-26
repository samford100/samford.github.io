import React from 'react'
import './style.css'


export default class Bio extends React.Component {
	render() {
		return (
      <div className="bio">
				<a name="bio"></a>
				<a name="contact"></a>
			   <h1 className="bio-header">Bio</h1>
				 <div className="bio-text">
				 	<p><strong className="name">Hello, World.</strong></p>
					 <p>My name is Sam Ford. I'm a 5th year Computer Scientist, lacrosse player,
					 and proud Yellow Jacket from the Chicago suburbs.
					 </p>
					 <p>
					 	I am interested in machine learning, data visualizations, and all the  "BIG DATA" buzzwords.
					 </p>
					 <p>
					 	Thanks for browsing my site. Check out my sample works, experience, and resume, and if you have any
						questions, comments, or concerns about how the site looks on your computer, send
						me an email.
					 </p>
					 <p>Cheers!</p>

					 <a href="mailto:sford100@gatech.edu?Subject=Hello,%20Sam%20" target="_top">
					   <i className="fa fa-envelope-square fa-2x icon" aria-hidden="true"></i>
					 </a>
					 <a href="https://www.linkedin.com/in/sam-ford-020a4a141/" target="_top">
					   <i className="fa fa-linkedin-square fa-2x icon linkedin  " aria-hidden="true"></i>
					 </a>



				 </div>
				 <img className="bio-img" src="./assets/headshot3.png" />
      </div>
		)
	}
}

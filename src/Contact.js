import React from 'react'
import './style.css'


export default class Contact extends React.Component {
	render() {
		return (
      <div className="contact-header">
				<a name="contact"></a>
				<a href="#home"><i className="fa fa-arrow-circle-up fa-2x icon" style={{float: "left"}}></i></a>
				<a href="mailto:sford100@gatech.edu?Subject=Hello,%20Sam%20" target="_top">
					<i className="fa fa-envelope-square fa-2x icon" aria-hidden="true"></i>
				</a>
				<a href="#home"><i className="fa fa-arrow-circle-up fa-2x icon" style={{float: "right"}}></i></a>
      </div>
		)
	}
}

import React from 'react'

export default class Contact extends React.Component {
	render() {
		return (
      <div class="contact-header">
				<a name="contact"></a>
				<a href="#home"><i class="fa fa-arrow-circle-up fa-2x icon" style={{float: "left"}}></i></a>
				<a href="mailto:sford100@gatech.edu?Subject=Hello,%20Sam%20" target="_top">
					<i class="fa fa-envelope-square fa-2x icon" aria-hidden="true"></i>
				</a>
				<a href="#home"><i class="fa fa-arrow-circle-up fa-2x icon" style={{float: "right"}}></i></a>
      </div>
		)
	}
}

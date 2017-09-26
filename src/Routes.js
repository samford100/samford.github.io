import React, {Component} from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, IndexLink } from 'react-router'
import ReactDOM from 'react-dom'
import Home from './Home.js'
import Resume from './Resume.js'
import SampleWorks from './SampleWorks.js'
import Bio from './Bio.js'
import Contact from './Contact.js'
// import BuildingPt1 from './blogPosts/BuildingPt1/BuildingPt1.js'
import './style.css'

class Routes extends React.Component {
  render() {
	return (
	  <div>
		<Router history={hashHistory}>
		  <Route path='/' component={Container}>
			<IndexRoute component={Home} />

		  </Route>
		</Router>
	  </div>
	)
  }
};
//       		<Route path='*' component={Home} />

// class Blog extends Component {
// 	render() {
// 		return (
// 			<div>
// 				<BuildingPt1 />
// 			</div>
// 		)
// 	}
// }

// <Route path="/bio" component={Bio} />
// <Route path="/contact" component={Contact} />
// <Route path='/resume' component={Resume} />
// <Route path='/sampleworks' component={SampleWorks} />
// <Route path='*' component={NotFound} />

class Container extends React.Component {
  render() {
	return (
	  <div>
			{this.props.children}
	  </div>
	)
  }
}



class NotFound extends React.Component {
  render() {
	return <h1>NOT FOUND</h1>
  }
}


export default Routes;

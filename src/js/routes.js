import React from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, IndexLink } from 'react-router'
import ReactDOM from 'react-dom'
import Home from './components/Home.js'
import SideBar from './components/SideBar.js'
import Resume from './components/Resume.js'
import SampleWorks from './components/SampleWorks.js'
import Bio from './components/Bio.js'
import Contact from './components/Contact.js'


class Routes extends React.Component {
  render() {
	return (
	  <div>
		<Router history={hashHistory}>
		  <Route path='/' component={Container}>
			<IndexRoute component={Home} />
      <Route path='*' component={Home} />

		  </Route>
		</Router>
	  </div>
	)
  }
};

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

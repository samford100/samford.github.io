import React from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, IndexLink } from 'react-router'
import ReactDOM from 'react-dom'
import Home from './components/Home.js'
import SideBar from './components/SideBar.js'

class Routes extends React.Component {
  render() {
	return (
	  <div>
		<Router history={hashHistory}>
		  <Route path='/' component={Container}>
			<IndexRoute component={Home} />
			<Route path="/bio" component={Bio} />
			<Route path="/contact" component={Contact} />
			<Route path='/resume' component={Resume} />
			<Route path='/sampleworks' component={SampleWorks} />
			<Route path='*' component={NotFound} />
		  </Route>
		</Router>
	  </div>
	)
  }
};

class Container extends React.Component {
  render() {
	return (
	  <div className="container-fluid">
		<div className="row">
		  <div className="col-xs-2">
			<SideBar />
		  </div>
		  <div className="col-xs-10">
			{this.props.children}
		  </div>
		</div>
	  </div>
	)
  }
}

class NavBar extends React.Component{
  render() {
    return (
      <div className="container row" style={{paddingBottom: '20px', paddingTop: '20px', paddingRight:'0px', marginRight: '0px'}}>
      	<div class="col-xs-4">
      		<input type="text" class="form-control" placeholder="Search"></input>
      	</div>
      	<div class="col-xs-8" style={{textAlign: "right"}}>
			<h4><Link style={{display:"inline-block"}} to="/profile">Sam Ford</Link></h4>
      	</div>
      </div>
    )
  }
};

class Bio extends React.Component {
	render() {
		return (
			<h1>Bio</h1>
		)
	}
}

class Resume extends React.Component {
	render() {
		return (
			<h1>Resume</h1>
		)
	}
}

class Contact extends React.Component {
	render() {
		return (
			<h1>Contact</h1>
		)
	}
}

class SampleWorks extends React.Component {
	render() {
		return (
			<h1>Sample Works</h1>
		)
	}
}

class NotFound extends React.Component {
  render() {
	return <h1>NOT FOUND</h1>
  }
}


export default Routes;
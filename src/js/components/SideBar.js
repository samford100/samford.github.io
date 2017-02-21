import React from 'react'
import {Link} from 'react-router'

export default class SideBar extends React.Component {
    render() {
        return (
        <div className="col-xs-2 bg-inverse sidebar">
            <ul className="nav nav-pills flex-column">
                <li className="nav-item">
                    <Link className="nav-link" activeClassName="activeLink" to={'/'}><h2 style={{'fontFamily': 'Droid Serif', "color": "gold"}}>Sam Ford</h2></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" activeClassName="activeLink" to={'/bio'}><h5>Bio</h5></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" activeClassName="activeLink" to={'/contact'}><h5>Contact</h5></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" activeClassName="activeLink" to={'/resume'}><h5>Resume</h5></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" activeClassName="activeLink" to={'/sampleworks'}><h5>Sample Works</h5></Link>
                </li>
            </ul>
        </div>
        )
    }
}
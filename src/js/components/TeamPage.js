import React from 'react';
import axios from 'axios'
import CreateTeamModal from './CreateTeamModal'
import Select from 'react-select-plus'
import {Link, browserHistory, withRouter} from 'react-router'
import SearchInput, {createFilter} from 'react-search-input'

import Timeline from 'react-calendar-timeline'
import moment from 'moment'


export default class TeamPage extends React.Component {
	render() {
		if (!this.props.params.team) {
			return (
				<div class="container">
					<SelectTeam />
				</div>
			)
		}

		return (
			<div class="container">
				<SelectTeam team={this.props.params.team} />
				<SchedulePane team={this.props.params.team} />
			</div>
		)
	}
}

class SchedulePane extends React.Component {
	constructor() {
		super()
		this.state = {
			editDisabled: true,
			schedules: null,
            searchTerm: '',
            searchTags: ['']
		}
	}

	componentDidMount() {
		//get schedules
		axios.get('/api/teams/getSchedulesForTeam?Name=' + this.props.team)
			.then(res => {
				this.setState({
					schedules: res.data.Schedules
				})
			})
			.catch(err => {
				console.log(err)
			})
	}

	handleEdit = (e) => {
		this.setState({
			editDisabled: !this.state.editDisabled
		})
	}

	handleScheduleChange = (schedule) => {
		console.log("handle Schedule change")
	}

	render() {
		if (!this.state.schedules) {
			return <div></div>
		}

		const buttons = this.state.editDisabled ? 
			<div>
				<input type="button" style={{width: '70px'}} class="btn btn-sm" value="Edit" onClick={this.handleEdit}></input>
			</div> : 
			<div>
				<input type="button" style={{width: '70px', display: 'inline'}} class="btn btn-sm" value="Submit" onClick={this.handleEdit}></input>
				<input type="button" style={{width: '70px', display: 'inline'}} class="btn btn-sm" value="Cancel" onClick={this.handleEdit}></input>
			</div>

		const mappedTabs = this.state.schedules.map((schedule, key) =>
			<ScheduleTab active={key == 1} name={schedule.ScheduleName} handleScheduleChange={this.handleScheduleChange} />
		)
		const mappedData = this.state.schedules.map((schedule, key) => 
			<ScheduleData name={schedule.ScheduleName} schedule={schedule} handleScheduleChange={this.handleScheduleChange} />
		)

		return (
			<div style={{paddingTop: '20px'}}>
				<h3>Schedules</h3>
				<ul class="nav nav-tabs" role="tablist">
					{mappedTabs}
				</ul>
				<div class="tab-content">
					{mappedData}
				</div>
				{buttons}
			</div>
		)
	}
}

class ScheduleTab extends React.Component {
	constructor() {
		super()
		this.state ={
			schedules: null
		}
	}

	render() {
		const id = '#' + this.props.name;
		return (
			<li className={this.props.active ? "nav-item active" : "nav-item"}>
				<a className="nav-link" data-toggle="tab" href={id} role="tab">
					{this.props.name}
				</a>
			</li>
		)
	}
}

class ScheduleData extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			editRotationDisabled: true,
			editManualDisabled: true,
			editOverrideDisabled: true
		}
	}

	//takes in a shift from the database and converts it to the correct format
	formatManualShift = (shift) => {
		const num = shift.Repeated ? 5 : 1
		let adder = ""
		if (shift.RepeatType == "daily") {
			adder = "days"
		} else if (shift.RepeatType == "weekly") {
			adder = "weeks"
		} else if (shift.RepeatType == "monthly") {
			adder = "months"
		}
		return [...Array(num)].map((_, key) => {
			return {
				id: Math.random() * 5000 + 5000,
				group: 2, 
				title: shift.Username, 
				start_time: moment(shift.Timestamp).add(key, adder), 
				end_time: moment(shift.Timestamp).add(key, adder).add(shift.Duration, 'minutes')
			}
		})
	}

	formatRotationShift = (shift) => {
		const num = shift.Repeated ? 5 : 1
		let adder = ""
		if (shift.RepeatType == "daily") {
			adder = "days"
		} else if (shift.RepeatType == "weekly") {
			adder = "weeks"
		} else if (shift.RepeatType == "monthly") {
			adder = "months"
		}
		return [...Array(num)].map((_, key) => {
			return {
				id: Math.random() * 5000 + 5000,
				group: 1, 
				title: shift.Users[key % shift.Users.length].Username, //rotates through users
				start_time: moment(shift.Timestamp).add(key, adder), 
				end_time: moment(shift.Timestamp).add(key, adder).add(shift.Duration, 'minutes')
			}
		})
	}

	handleEdit = (e) => {
		this.setState({
			editRotationDisabled: !this.state.editRotationDisabled
		})
		console.log(this.state.editRotationDisabled)
	}

	render() {
		const mappedOverrideShifts = this.props.schedule.OverrideShifts.map((shift, key) => {
			return {
				id: Math.random() * 5000 + 5000,
				group: 3,
				title: shift.Username, 
				start_time: moment(shift.Timestamp), 
				end_time: moment(shift.Timestamp).add(shift.Duration, 'minutes')
			}
		})

		//returns [[shift1 repeated],[shift2 repeated],...]
		const mappedManualShifts = this.props.schedule.ManualShifts.map((shift, key) => {
			return this.formatManualShift(shift)
		})

		//returns [[shift1 repeated],[shift2 repeated],...]
		const mappedRotationShifts = this.props.schedule.RotationShifts.map((shift, key) => {
			return this.formatRotationShift(shift)
		})

		//aggregate from nested arrays
		let shifts = [...mappedOverrideShifts]
		for (const shift of mappedManualShifts) {
			shifts.push(...shift)
		}
		for (const shift of mappedRotationShifts) {
			shifts.push(...shift)
		}

		const rotationButtons = this.state.editRotationDisabled ? <div>
				<h6>Rotation</h6>
				<input type="button" style={{width: '70px'}} class="btn btn-sm" value="Edit" onClick={this.handleEdit}></input>
			</div> : 
			<div>
				<h6>Rotation</h6>
				<input type="button" style={{width: '70px', display: 'inline'}} class="btn btn-sm" value="Submit" onClick={this.handleEdit}></input>
				<input type="button" style={{width: '70px', display: 'inline'}} class="btn btn-sm" value="Cancel" onClick={this.handleEdit}></input>

			</div>
		const manualButtons = <div>
				<h6>Manual</h6>
				<input style={{width: '50px'}} class="btn btn-sm" value="Edit" onClick={this.handleEdit}></input>
			</div>
		const overrideButtons = <div>
				<h6>Override</h6>
				<input style={{width: '50px'}} class="btn btn-sm" value="Edit" onClick={this.handleEdit}></input>
			</div>

		const groups = [
		  {id: 1, title: rotationButtons},
		  {id: 2, title: manualButtons},
		  {id: 3, title: overrideButtons},
		  {id: 4, title: 'Computed'},
		]

		return (
			<div className="tab-pane" id={this.props.name} role="tabpanel">
					<Timeline groups={groups}
					style={{position: 'relative', height: '100%'}}
					items={shifts}
					defaultTimeStart={moment().add(-8, 'hour')}
					defaultTimeEnd={moment().add(8, 'hour')}
					lineHeight={75}
					canMove={true}
					canZoom={true}
					/>
			</div>
		)
	}
}

class SelectTeam extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			teams: null,
			value: props.team,
                        searchTerm: ''
		}
		console.log("value set")
		console.log(this.state.value)
	}

	componentWillMount() {
		axios.get("http://localhost:8080/api/teams/getTeams")
			.then((result) => {
				console.log('got teams')
				console.log(result.data)
                                console.log(result.data[0])
				this.setState({teams: result.data});
			})
			.catch((err) => {
				console.log(err);
			})
	}

    searchUpdated = (term) => {
        this.setState({searchTerm: term})
    }
    search = () => {
        return
    }


	handleSelected = (value) => {
		console.log("selected")
		console.log(value)
		browserHistory.push(`myteams/${value.label}`);
		window.location.reload()

		this.setState({
			value
		})
	}

	valueRenderer = (option) => {
		return <h3 style={{ paddingTop: '8px' }}><strong>{option.label}</strong></h3>
	}

	render() {
		const mappedAllTeams = this.state.teams ? [{
			label: 'My Teams', 
			options: this.state.teams.map(team => { return {value: team.Name, label: team.Name} })
		}] : [{value: this.props.team, label: this.props.team}]
                const KEYS_TO_FILTER=['Name', 'ID']
                const filteredTeams = this.state.teams ? this.state.teams.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTER)) : ''
                console.log(filteredTeams)
		console.log(mappedAllTeams)
		return (
			<div class="row" style={{verticalAlign: 'text-bottom'}}>                          


				<Select class="col-xs-4" style={{paddingLeft: '0px', height: "50px"}} valueRenderer={this.valueRenderer} clearable={false} value={this.state.value} placeholder={<h3 style={{ paddingTop: '8px' }}><strong>Select Team</strong></h3>} options={mappedAllTeams} onChange={this.handleSelected} />
				<input type="button" class="btn btn-secondary col-xs-4" data-container="body" value="Team Description" data-toggle="popover" data-placement="bottom" data-content="popover text"></input>
				<div class="col-xs-2"></div>
				<CreateTeamModal style={{float: "right"}} class="col-xs-2" />
			</div>
		)
	}
}

const ex = {
	"Schedules":[
		{
			"ScheduleName":"Default",
			"OverrideShifts":[
				{
					"ID":1,
					"Timestamp":"2017-02-20T22:02:01.000Z",
					"Duration":60,
					"Username":"cclegg",
					"FirstName":"Chris",
					"LastName":"Clegg"
				},{
					"ID":3,
					"Timestamp":"2017-02-20T23:02:01.000Z",
					"Duration":90,
					"Username":"zhancock",
					"FirstName":"Zack",
					"LastName":"Hancock"
				}
			],
			"ManualShifts":[
				{
					"ID":1,
					"Timestamp":"2017-02-20T22:02:01.000Z",
					"Duration":180,
					"Username":"cclegg",
					"FirstName":"Chris",
					"LastName":"Clegg",
					"Repeated":true,
					"RepeatType":"daily"
				},{
					"ID":3,
					"Timestamp":"2017-02-20T23:02:01.000Z",
					"Duration":90,
					"Username":"zhancock",
					"FirstName":"Zack",
					"LastName":"Hancock",
					"Repeated":true,
					"RepeatType":"daily"
				}
			],
			"RotationShifts":[
				{
					"ID":1,
					"Timestamp":"2017-02-20T22:02:01.000Z",
					"Duration":120,
					"Repeated":true,
					"RepeatType":"weekly",
					"Users":[
						{
							"Username":"cclegg",
							"FirstName":"Chris",
							"LastName":"Clegg",
							"Position":1
						},{
							"Username":"zhancock",
							"FirstName":"Zack",
							"LastName":"Hancock",
							"Position":2
						}
					]
				},{
					"ID":3,
					"Timestamp":"2017-02-20T23:02:01.000Z",
					"Duration":90,
					"Repeated":true,
					"RepeatType":"daily",
					"Users":[
						{
							"Username":"sford",
							"FirstName":"Sam",
							"LastName":"Ford",
							"Position":2
						},{
							"Username":"zhancock",
							"FirstName":"Zack",
							"LastName":"Hancock",
							"Position":1
						}
					]
				}
			]
		},{
			"ScheduleName":"Test",
			"OverrideShifts":[],"ManualShifts":[],"RotationShifts":[]}],"TeamName":"Database Team","TeamID":1}





				// <div class="col-xs-4"></div>
                // <SearchInput class="col-xs-4" className="search-input" onChange={this.searchUpdated} />
                // <input class="col-xs-2" type="button" value="search" onClick={this.search}> </input>



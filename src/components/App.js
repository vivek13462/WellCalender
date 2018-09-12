import { Component } from 'react'
import { PatientList } from './PatientList'
import { RequestForm } from './RequestForm'
import { Menu } from './Menu'

export class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			details: [
			{
				name: "TEST NAME",
				date: "0000-00-00",
                starttime: "00:00",
				endtime: "00:00"
			}
		]
		}
		this.addRequest = this.addRequest.bind(this)
	}

	addRequest(newRequest) {
		this.setState({
			details: [
				...this.state.details,
				newRequest
			]
		})
	}

	render() {
		return (
			<div className="app">
			<Menu />
			{
			 (this.props.location.pathname === "/new-request") ?
			 	<RequestForm onNewRequest={this.addRequest}/> :
			 	<PatientList days={this.state.details}/>				 
			}
					
			</div>
		)
	}
}





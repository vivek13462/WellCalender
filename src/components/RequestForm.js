import React from 'react'
import ReactDOM from 'react-dom'
import { PropTypes, Component } from 'react'

const startTimeOptions = [
	"9:00 am","10:00 am","11:00 am","12:00 pm","1:00 pm","2:00 pm","3:00 pm","4:00 pm","5:00 pm"
]

const endTimeOptions = [
    "10:00 am","11:00 am","12:00 pm","1:00 pm","2:00 pm","3:00 pm","4:00 pm","5:00 pm","6:00 pm"
]

class Starttime extends Component {
	
	get value() {
		return this.refs.startTime.value
	}

	set value(inputValue) {
		this.refs.startTime.value = inputValue
	}

	render() {
            return (
			<div>
				<input ref="startTime"
					   type="text" 
					   list="starttime-slot" />
				<datalist id="starttime-slot">
					{this.props.options.map(
						(opt, i) => 
						<option key={i}>{opt}</option>)}
				</datalist>
			</div>
		)
	}
}

class Endtime extends Component {
	
	get value() {
		return this.refs.endTime.value
	}

	set value(inputValue) {
		this.refs.endTime.value = inputValue
	}

	render() {
		return (
			<div>
				<input ref="endTime"
					   type="text" 
					   list="endtime-slot" />
				<datalist id="endtime-slot">
					{this.props.options.map(
						(opt, i) => 
						<option key={i}>{opt}</option>)}
				</datalist>
			</div>
		)
	}
}



export const RequestForm = ({name,
                             date,
                             starttime,
                             endtime, 
							 onNewRequest }) => {
	
	let _name, _date, _starttime, _endtime
	
	const submit = (e) => {
		e.preventDefault()
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1;
        var yyyy = today.getFullYear();
        //alert(_date.value);
        today = yyyy+'-0'+mm+'-'+dd;
        //alert(today);
        if(_date.value <= today){
            alert("Please enter today's or Future Date");
        }
        else {
		onNewRequest({
            name: _name.value,
			date: _date.value,
			starttime: _starttime.value,
            endtime: _endtime.value
		})
        _name.value = ''
		_date.value = ''
		_starttime.value = ''
        _endtime.value = ''
            }
	}

	return (
		<form className="add-patient" onSubmit={submit}>
        <h2>WELL CALENDAR</h2> <br/>
        <div>
            <b><label htmlFor="name">Name: </label></b>
			<input id="name" 
				   type="text" 
				   required 
				   defaultValue={name}
				   ref={input => _name = input}/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <b><label htmlFor="date">Date: </label></b>
			<input id="date" 
				   type="date" 
				   required 
				   defaultValue={date}
				   ref={input => _date = input}/>
        </div>
        
        <br/>
        <div>
        
			<b><label htmlFor="resort">Start Time: </label></b>
			<Starttime options={startTimeOptions}
				   		  ref={input => _starttime = input}/>
        
        <b><label htmlFor="endtime">End Time: </label></b>
			<Endtime options={endTimeOptions}
				   		  ref={input => _endtime = input}/>
        </div>
        <br/>

			<button>Request</button>
		</form>
	)
}

RequestForm.defaultProps = {
    name:"Vivek Tiwari",
    //date: "2018-09-12"
}


RequestForm.propTypes = {
	name: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
    starttime: PropTypes.string.isRequired,
    endtime: PropTypes.string.isRequired
}
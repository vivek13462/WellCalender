import Calendar from 'react-icons/lib/fa/calendar'
import { PatientData } from './PatientData'
import { PropTypes } from 'react'
import { Link } from 'react-router'

export const PatientList = ({days, filter}) => {

  return (
  	<div className="patients-list">
	<table>
		<thead>
			<tr>
				<th>Name</th>
				<th>Appointment Date</th>
				<th>Start Time</th>
				<th>End Time</th>
			</tr>
		</thead>
		<tbody>
			{days.map((day, i) =>
				<PatientData key={i}
						   {...day}/>	
				)}
		</tbody>

	</table>
	</div>
)
}  

PatientList.propTypes = {
	days: function(props) {
		if(!Array.isArray(props.days)) {
			return new Error(
				"PatientList should be an array"	
				)
		} else if(!props.days.length) {
			return new Error(
				"PatientList must have at least one record"
				)
		} else {
			return null
		}
	}
}














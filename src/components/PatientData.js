import Calendar from 'react-icons/lib/fa/calendar'
import { PropTypes } from 'react'

export const PatientData = ({name, date, starttime, endtime}) => (
	<tr>
		<td>
			{name}
		</td>
		<td>
			{date}
		</td>
        <td>
            {starttime}
        </td>
        <td>
            {endtime}
        </td>
	</tr>						

)

PatientData.propTypes = {
	date: PropTypes.string.isRequired
}



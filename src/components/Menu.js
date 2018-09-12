import { Link } from 'react-router'
import ListAppointmentIcon from 'react-icons/lib/fa/table'
import AddAppointmentIcon from 'react-icons/lib/fa/calendar-plus-o'

export const Menu = () => 
<nav className="menu">
<Link to="/new-request" activeClassName="selected">Request
    <AddAppointmentIcon />
    </Link>
    <Link to="/" activeClassName="selected">List
        <ListAppointmentIcon />
    </Link>
      </nav>
    

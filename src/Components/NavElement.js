import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function NavElement(props) 
{
    return (
        <div id={props.id} onClick={props.onClick} className="nav-element">
            <h1>{props.title}</h1>
            <FontAwesomeIcon icon={props.icon} className="nav-icon" />
        </div>
    )
}
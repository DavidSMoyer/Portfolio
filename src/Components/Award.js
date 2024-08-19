import '../CSS/Award.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Award(props)
{
    return (
        <li className={props.link !== undefined ? "award link" : "award"} onClick={props.link !== undefined ? () => window.open(props.link) : undefined} title={props.link}>
            <div className="award-title">
                <div className="award-left">
                    <FontAwesomeIcon className="certified-icon" icon={props.type} />
                    <h3>{props.name}</h3>
                </div>
                <div className="award-right">
                    <h3>{props.date}</h3>
                </div>
            </div>
            <h4>Issued by {props.issuer}</h4>
            <p>{props.description}</p>
        </li>
    )
}
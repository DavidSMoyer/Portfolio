import '../CSS/Project.css';
import { useNavigate } from 'react-router-dom';
import { StartTransition } from '../JS/Nav';

export default function Project(props)
{
    // ID
    // Name
    // Img
    // Desc

    let navigate = useNavigate();

    return (
        <a className='project' onClick={() => { StartTransition("right", () => navigate("/projects/" + props.id)); props.setLoad("#979797", "#ffffff", "laptop-code");}}>
            <div className="project-img">
                <img src={props.img} />
            </div>
            <div className="project-overlay">
                <h3>{props.name}</h3>
                {
                    props.desc.length > 110
                    ? <p>{props.desc.slice(0, 110).trim() + "..."}</p>
                    : <p>{props.desc}</p>
                }
            </div>
        </a>
    )
}
import NavElement from './NavElement.js';
import '../CSS/Nav.css';
import { StartTransition } from '../JS/Nav.js';
import { useNavigate } from 'react-router-dom';

export default function Nav(props) 
{
    let navigate = useNavigate();

    return (
        <div id="nav-grid">
            <NavElement id="nav-about" title="Who is David?" icon="user-tie" onClick={() => { StartTransition("left", () => navigate("/about")); props.setLoad("#918d1b", "#fcf434", "user-tie");}} />
            <NavElement id="nav-projects" title="Projects" icon="laptop-code" onClick={() => { StartTransition("right", () => navigate("/projects")); props.setLoad("#979797", "#ffffff", "laptop-code");}}  />
            <NavElement id="nav-experience" title="Experience" icon="tasks" onClick={() => { StartTransition("left", () => navigate("/experience")); props.setLoad("#543170", "#9b59d0", "tasks");}} />
            <NavElement id="nav-contact" title="Contact" icon="envelope" onClick={() => { StartTransition("right", () => navigate("/contact")); props.setLoad("#0f0f0f", "#2c2c2c", "envelope");}} />
        </div>
    )
}
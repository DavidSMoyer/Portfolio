import '../../CSS/Projects.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StartTransition } from "../../JS/Nav";
import { useNavigate } from "react-router-dom";

export default function Projects(props)
{
    let navigate = useNavigate();

    return (
        <div id="projects">
            <FontAwesomeIcon id="back" icon="reply" onClick={() => {props.setLoad("#979797", "#ffffff", "laptop-code"); StartTransition("left", () => navigate("/")); }} />
        </div>
    )
}
import '../../CSS/Projects.css';
import { useParams } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { StartTransition } from '../../JS/Nav';
import projects from '../../Data/Projects.json';
import Slideshow from '../Slideshow';
import Social from '../Social';

import github from '../../Images/github.png';

export default function ProjectDetails(props)
{
    let { id } = useParams();
    let navigate = useNavigate();

    let project = projects.find(proj => proj.id == id);
    console.log(project.description);

    return (
        <div id="project-details">
            <FontAwesomeIcon id="home" icon="home" onClick={() => { StartTransition("left", () => navigate("/")); props.setLoad("#979797", "#ffffff", "laptop-code");}} />
            <FontAwesomeIcon id="back" icon="reply" onClick={() => { StartTransition("left", () => navigate("/projects")); props.setLoad("#979797", "#ffffff", "laptop-code");}} />
            <h1>{project.name}</h1>
            <Slideshow>
                {
                    project.images.map((img, i) =>
                     <div key={i} className='inner-slide'>
                        <img src={img} />
                     </div>
                    )
                }
            </Slideshow>
            {
                project.repo !== "" ? <div id="repo"><Social src={project.repo} img={github} /></div> : ""
            }
            {
                project.description.map((desc, i) => 
                    <p key={i + "-2"}>{desc}</p>
                )
            }
        </div>
    )
}
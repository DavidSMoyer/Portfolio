import '../../CSS/Projects.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StartTransition } from "../../JS/Nav";
import { useNavigate } from "react-router-dom";
import Project from '../Project.js';
import ProjectDetails from './ProjectDetails.js';

import { Routes, Route } from "react-router-dom";

import projects from '../../Data/Projects.json'

export default function Projects(props)
{
    let navigate = useNavigate();

    let rows = Math.ceil(projects.length / 3);

    return (
        <Routes>
            <Route path="/" element={
                <div>
                    <div id="projects">
                        <FontAwesomeIcon id="back" icon="reply" onClick={() => {props.setLoad("#979797", "#ffffff", "laptop-code"); StartTransition("left", () => navigate("/")); }} />
                        <h1>Projects</h1>
                        <div id="project-list-container">
                            <div id="project-list">
                                {
                                    projects.map((proj, i) => <Project key={proj.id} setLoad={props.setLoad} id={proj.id} name={proj.name} desc={proj.description[0]} img={proj.thumbnail} />)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            } />
            <Route path="/:id" element={<ProjectDetails setLoad={props.setLoad} />} />
        </Routes>
    )
}
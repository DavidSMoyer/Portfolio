import '../../CSS/Projects.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StartTransition } from "../../JS/Nav";
import { useNavigate } from "react-router-dom";
import Project from '../Project.js';
import ProjectDetails from './ProjectDetails.js';
import React from 'react';
import { useState } from 'react';

import { Routes, Route } from "react-router-dom";

export default function Projects(props)
{
    const [projects, setProjects] = useState([]);
    let navigate = useNavigate();

    React.useEffect(() => {
        fetch('Files/projects.json').then((res)=>res.json()).then((data)=>{
            setProjects(data)
        });
    });

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
                                    projects.length === 0 ? "" : projects.map((proj, i) => <Project key={proj.id} setLoad={props.setLoad} id={proj.id} name={proj.name} desc={proj.description[0]} img={proj.thumbnail} />)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            } />
            <Route path="/:id" element={<ProjectDetails setLoad={props.setLoad} projects={projects} />} />
        </Routes>
    )
}
import '../CSS/Experience.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { StartTransition } from '../JS/Nav';
import { Slideshow, Slide } from './VerticalSlideshow';

import csharp from '../Images/csharp.png';
import cplusplus from '../Images/cplusplus.svg';
import html from '../Images/html.png';
import java from '../Images/java.png';
import python from '../Images/python.png';
import sql from '../Images/sql.png';
import javascript from '../Images/javascript.png';
import css from '../Images/css.png';

import unity from '../Images/unity.png'
import unrealengine from '../Images/unrealengine.png'
import git from '../Images/git.png'
import godot from '../Images/godot.png'

export default function Experience(props)
{
    let navigate = useNavigate();

    return (
        <div id="experience">
            <FontAwesomeIcon id="back" icon="reply" onClick={() => {props.setLoad("#543170", "#9b59d0", "tasks"); StartTransition("right", () => navigate("/")); }} />
            <main>
                <Slideshow>
                    <div className='inner-slide'>
                        <h1>Skills</h1>
                        <ul id="levels">
                            <li className="advanced-full">Advanced</li>
                            <li className="intermediate-full">Intermediate</li>
                            <li className="beginner-full">Beginner</li>
                        </ul>
                        <div className="skill-list">
                            <h2>Languages</h2>
                            <ul>
                                <li className="advanced"><img src={csharp} /></li>
                                <li className="advanced"><img src={css} /></li>
                                <li className="advanced"><img src={html} /></li>
                                <li className="advanced"><img src={java} /></li>
                                <li className="advanced"><img src={javascript} /></li>
                                <li className="intermediate"><img src={sql} /></li>
                                <li className="beginner"><img src={cplusplus} /></li>
                                <li className="beginner"><img src={python} /></li>
                            </ul>
                        </div>
                        <div className="skill-list">
                            <h2>Tools</h2>
                            <ul>
                                <li className="advanced"><img src={git} /></li>
                                <li className="advanced"><img src={unity} /></li>
                                <li className="intermediate"><img src={unrealengine} /></li>
                                <li className="beginner"><img src={godot} /></li>
                            </ul>
                        </div>
                        <div className="skill-list">
                            <h2>Soft Skills</h2>
                            <ul>
                                <li><p>Problem Solving</p></li>
                                <li><p>Adaptability</p></li>
                                <li><p>Independence</p></li>
                                <li><p>Collaboration</p></li>
                                <li><p>Communication</p></li>
                            </ul>
                        </div>
                    </div>
                    <div className='inner-slide'>
                        <h1>Slide 2</h1>
                    </div>
                </Slideshow>
            </main>
        </div>
    )
}
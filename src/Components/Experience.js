import '../CSS/Experience.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { StartTransition } from '../JS/Nav';
import { Slideshow, Slide } from './VerticalSlideshow';
import Skill from './Skill';
import Award from './Award';
import Position from './Position';
import Education from './Education';

import csharp from '../Images/csharp.png';
import cplusplus from '../Images/cplusplus.svg';
import html from '../Images/html.png';
import java from '../Images/java.png';
import python from '../Images/python.png';
import sql from '../Images/sql.png';
import javascript from '../Images/javascript.png';
import css from '../Images/css.png';

import unity from '../Images/unity.png';
import unrealengine from '../Images/unrealengine.png';
import git from '../Images/git.png';
import godot from '../Images/godot.png';
import react from '../Images/react.png';
import vr from '../Images/vr.png';

export default function Experience(props)
{
    let navigate = useNavigate();

    return (
        <div id="experience">
            <FontAwesomeIcon id="back" icon="reply" onClick={() => {props.setLoad("#543170", "#9b59d0", "tasks"); StartTransition("right", () => navigate("/")); }} />
            <main>
                <Slideshow>
                    <div className='inner-slide' id="skills-slide">
                        <h1>Skills</h1>
                        <ul id="levels">
                            <li className="advanced-full">Advanced</li>
                            <li className="intermediate-full">Intermediate</li>
                            <li className="beginner-full">Beginner</li>
                        </ul>
                        <div className="skill-list">
                            <h2>Languages</h2>
                            <ul>
                                <Skill skillLevel="advanced" img={csharp} tooltip="C#" />
                                <Skill skillLevel="advanced" img={css} tooltip="CSS" />
                                <Skill skillLevel="advanced" img={html} tooltip="HTML" />
                                <Skill skillLevel="advanced" img={java} tooltip="Java" />
                                <Skill skillLevel="advanced" img={javascript} tooltip="JavaScript" />
                                <Skill skillLevel="intermediate" img={sql} tooltip="SQL" />
                                <Skill skillLevel="beginner" img={cplusplus} tooltip="C++" />
                                <Skill skillLevel="beginner" img={python} tooltip="Python" />
                            </ul>
                        </div>
                        <div className="skill-list">
                            <h2>Tools</h2>
                            <ul>
                                <Skill skillLevel="advanced" img={git} tooltip="Git" />
                                <Skill skillLevel="advanced" img={react} tooltip="React" />
                                <Skill skillLevel="advanced" img={unity} tooltip="Unity" />
                                <Skill skillLevel="intermediate" img={unrealengine} tooltip="Unreal Engine" />
                                <Skill skillLevel="intermediate" img={vr} tooltip="VR" />
                                <Skill skillLevel="beginner" img={godot} tooltip="Godot" />
                            </ul>
                        </div>
                        <div className="skill-list" id="soft-skills">
                            <h2>Soft Skills</h2>
                            <ul>
                                <Skill skillLevel="advanced" text="Problem Solving" />
                                <Skill skillLevel="advanced" text="Adaptability" />
                                <Skill skillLevel="advanced" text="Independence" />
                                <Skill skillLevel="advanced" text="Collaboration" />
                                <Skill skillLevel="intermediate" text="Communication" />
                                <Skill skillLevel="intermediate" text="Time Management" />
                            </ul>
                        </div>
                    </div>
                    <div className="inner-slide">
                        <h1>Education</h1>
                        <ul className="school-list">
                            <Education 
                                name="Manitoba Institution of Trades and Technology" 
                                startDate="September 1 2020" 
                                endDate="August 1 2022" 
                                logo="https://www.canamgroup.com/assets/universitylogos/1658995738-manitoba-institute-of-yrades-and-technology.png"
                                link="https://mitt.ca" 
                                description="A primarily web-design oriented course, frontend and backend, with business related content as well. Completed with a 4.5 GPA."
                            />
                            <Education
                                name="Pembina Trails Early College"
                                startDate="September 1 2018"
                                endDate="June 1 2022"
                                logo="https://sbptsdstor.blob.core.windows.net/media/Default/fgg/351/PTEC.png"
                                link="https://www.pembinatrails.ca/earlycollege"
                                description="Core high school education mixed with a variety of software-based courses, with extracurricular opportunities, and an advanced computer science course. Built upon core concepts, game design, and web design. Completed with a 4.0 GPA and 38.5 credits."
                            />
                        </ul>
                    </div>
                    <div className='inner-slide'>
                        <h1>Awards</h1>
                        <ul id="awards">
                            <Award 
                                type="certificate"
                                name="Unreal Engine 5 (UE5) Complete Beginners Course Certificate of Completion"
                                issuer="Udemy Online Courses"
                                date="February 2024"
                                description="Earned by completing the Unreal Engine 5 Complete Beginners Course offered by Tyler DeLange on Udemy."
                                link="https://www.udemy.com/course/unreal-engine-course/?couponCode=JUST4U02223"
                            />
                            <Award 
                                type="certificate"
                                name="Software Developer Diploma"
                                issuer="the Manitoba Institution of Trades and Technology"
                                date="August 2023"
                                description="Earned by completing the Software Developer course at the Manitoba Institution of Trades and Technology, graduated with a 4.5 GPA."
                                link="https://mitt.ca/programs/post-secondary-programs/1759/software-developer"
                            />
                            <Award 
                                type="certificate"
                                name="High School Diploma"
                                issuer="Udemy Online Courses"
                                date="June 2022"
                                description="Awarded for completing a high school education, split between Shaftesbury High School and Pembina Trails Early College with a 4.0 GPA"
                                link="https://www.udemy.com/course/unreal-engine-course/?couponCode=JUST4U02223"
                            />
                            <Award 
                                type="certificate"
                                name="Introduction to Quantum Computation Certificate of Completion"
                                issuer="The Coding School"
                                date="May 2021"
                                description="Earned the Certificate of Completion for the weekend course during other education, for learning more about the quantum realm and q-bits, and the theory and mathematics behind them and quantum gates."
                                link="https://www.qubitbyqubit.org/course-info"
                            />
                            <Award 
                                type="certificate"
                                name="Cybersecurity Essentials Certificate of Completion"
                                issuer="Cisco Systems Inc."
                                date="June 2020"
                                description="Earned the Certificate of Completion for the Cisco Cybersecurity Essentials program through Pembina Trails Early College by proving the ability to secure a network with basic security."
                                link="https://www.netacad.com/courses/cybersecurity/cybersecurity-essentials"
                            />
                            <Award 
                                type="certificate"
                                name="IT Essentials Certificate of Completion"
                                issuer="Cisco Systems Inc."
                                date="February 2020"
                                description="Earned the Certificate of Completion for the Cisco IT Essentials program through Pembina Trails Early College by proving the ability to remove and install system software and hardware components of a PC."
                                link="https://www.netacad.com/courses/os-it/it-essentials"
                            />
                            <Award 
                                type="certificate"
                                name="Networking Essentials Certificate of Completion"
                                issuer="Cisco Systems Inc."
                                date="September 2019"
                                description="Earned the Certificate of Completion for the Cisco Networking Essentials program through Pembina Trails Early College by displaying the ability to install a network, including configuring switches and routers from factory settings."
                                link="https://www.netacad.com/courses/networking/networking-essentials"
                            />
                            <Award 
                                type="certificate"
                                name="LIFT Business Ethics Certificate"
                                issuer="Better Business Bureau"
                                date="April 2019"
                                description="Earned the Lift Business Ethics Certificate through Pembina Trails Early College for demonstrating understanding of ethical decisions and approaches, application of approaches, and demonstrating knowledge of various characteristics."
                                link="https://www.bbb.org/local/0057/bbb-foundation/lift-ethics"
                            />
                            <Award 
                                type="award"
                                name='"Game On" Game Jam - Best Group Game'
                                issuer="Sisler High School"
                                date="February 2019"
                                description='Awarded the Best Group Game award by Sisler High School while participating in the "Game On" game jam.'
                                link="https://www.sislercreate.com/game-on-sisler/"
                            />
                        </ul>
                    </div>
                    <div className="inner-slide">
                        <h1>Past Experience</h1>
                        <ul class="job-list">
                            <Position 
                                startDate="August 22 2022"
                                endDate="November 15 2023"
                                title="Junior Unity Developer"
                                employer="Bit Space Development"
                                logo="https://2165981.fs1.hubspotusercontent-na1.net/hub/2165981/hubfs/BSD_AppIcon-512.png?width=108&height=108"
                                description="Responsible for developing independently and with a team on various Unity projects. Worked on internal projects, and did some miscellaneous work on some listed projects such as Military Drone Experience, Indigenous Community Experience, and Therapy Using VR."
                                skills="C# Unity VR"
                                link="https://www.bitspacedevelopment.com"
                            />
                        </ul>
                    </div>
                </Slideshow>
            </main>
        </div>
    )
}
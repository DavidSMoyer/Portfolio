import '../../CSS/About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { StartTransition } from '../../JS/Nav';
import { Link } from 'react-router-dom';

export default function About(props)
{
    let navigate = useNavigate();

    return (
        <div id="about">
            <FontAwesomeIcon id="back" icon="reply" onClick={() => {props.setLoad("#918d1b", "#fcf434", "user-tie"); StartTransition("right", () => navigate("/")); }} />
            <main>
                <h1>David - Software Developer</h1>
                <hr />
                <p>
                    Hey there! My name is David, I use They/Them, and I'm an aspiring Software Developer. I am a graduated student of both Pembina Trails Early College and the Manitoba Institution of Trades and Technology since 2022.
                </p>
                <p>
                    I am an adaptive and hard working individual, with an interest in both developing and playing video games! I believe that this insight makes me a better developer, allowing me to understand the experience you're looking for when gaming. 
                    Whether independent or in a team, I am capable of problem solving and communication in order to get a project done. 
                </p>
                <p>
                    While my main interest is game design, I have the knowledge needed to pursue most forms of software design! I pride myself on nothing more than my ability to learn on the fly, and I believe that a good programmer is always learning no matter what field they go into!
                </p>
                <Link id="resume" to="../Files/resume.pdf" target="_blank" download>Resume</Link>
            </main>
            <div id="portrait">
            </div>
            <div id="pfp">
            </div>
        </div>
    )
}
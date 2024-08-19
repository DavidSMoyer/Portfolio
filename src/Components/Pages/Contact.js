import '../../CSS/Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StartTransition } from '../../JS/Nav';
import { useNavigate } from 'react-router-dom';
import Social from '../Social';

import github from '../../Images/github.png';
import twitter from '../../Images/twitter.png';
import linkedin from '../../Images/linkedin.webp'

export default function Contact(props)
{
    let navigate = useNavigate();

    return (
        <div id="contact">
            <FontAwesomeIcon id="back" icon="reply" onClick={() => {props.setLoad("#0f0f0f", "#2c2c2c", "envelope"); StartTransition("left", () => navigate("/")); }} />
            <main>
                <h1>Contact</h1>
                <p>If you're an employer looking to reach out, you can find me at these socials or email me at <a href="MAILTO:moyer_ds@hotmail.com">moyer_ds@hotmail.com</a>. Alternatively, you can also fill out this contact form to reach me!</p>
                <ul id="socials">
                    <Social src="https://github.com/DavidSMoyer" img={github} />
                    <Social src="https://x.com/ds_moyer" img={twitter} />
                    <Social src="https://www.linkedin.com/in/david-moyer-587697231/" img={linkedin} />
                </ul>
                <form action="https://formsubmit.co/88e172f33329e3508252a1f346ca0838" method="post">
                    <div id="senderInfo">
                        <input type="text" name="name" id="nameInput" placeholder="Name..." required="true" />
                        <input type="email" name="email" id="emailInput" placeholder="Email..." required="true" />
                    </div>
                    <input type="text" name="subject" id="subjectInput" placeholder="Subject..." required="true" />
                    <textarea name="content" rows="10" required="true"></textarea>
                    <input type="submit" text="Submit" id="submitForm" />
                </form>
            </main>
        </div>
    )
}
import './CSS/App.css';
import Nav from './Components/Nav.js'
import About from './Components/Pages/About.js'
import Experience from './Components/Pages/Experience.js';
import Projects from './Components/Pages/Projects.js'
import Contact from './Components/Pages/Contact.js';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
    const [ transitionColor, setTransitionColor ] = useState("yellow");
    const [ innerColor, setInnerColor ] = useState("yellow");
    const [ loadIcon, setLoadIcon ] = useState("address-book");

    let setLoad = (color, innerColor, icon) => {
        setTransitionColor(color);
        setInnerColor(innerColor);
        setLoadIcon(icon);
    }

    return (
        <div className="App">
            <div id="transition" style={{backgroundColor: transitionColor}}>
                <div id="inner-transition" style={{backgroundColor: innerColor, color: transitionColor}}>
                    <FontAwesomeIcon icon={loadIcon} id="loading" />
                </div>
            </div>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Nav setLoad={setLoad} />} />
                    <Route path="about" element={<About setLoad={setLoad} />} />
                    <Route path="experience" element={<Experience setLoad={setLoad} />} />
                    <Route path="projects/*" element={<Projects setLoad={setLoad} />} />
                    <Route path="contact" element={<Contact setLoad={setLoad} />} />
                    <Route path="*" />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
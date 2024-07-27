import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../CSS/VerticalSlideshow.css';

export function Slideshow(props)
{
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fading, setFading] = useState(false);
    const [fadeDirection, setFadeDirection] = useState("out-down");

    const nextSlide = () => {
        if (currentIndex < props.children.length - 1)
        {
            setFading(true);
            setFadeDirection("out-down");
            setTimeout(() => {
                setCurrentIndex(currentIndex + 1);
                setFadeDirection("in-up");
                setTimeout(() => setFading(false), 250);
            }, 250);
        }
    }

    const prevSlide = () => {
        if (currentIndex > 0)
        {
            setFading(true);
            setFadeDirection("out-up");
            setTimeout(() => {
                setCurrentIndex(currentIndex - 1);
                setFadeDirection("in-down");
                setTimeout(() => setFading(false), 250);
            }, 250);
        }
    }

    return (
        <div className="vertical-slideshow">
            <FontAwesomeIcon id="vertical-slideshow-up" icon="chevron-up" onClick={prevSlide} />
            <div className={fading ? "slide fading fade-" + fadeDirection : "slide"}>
                {props.children[currentIndex]}
            </div>
            <FontAwesomeIcon id="vertical-slideshow-down" icon="chevron-down" onClick={nextSlide} />
        </div>
    );
}
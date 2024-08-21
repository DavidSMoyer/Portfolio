import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../CSS/Slideshow.css';

export default function Slideshow(props)
{
    let direction = props.direction;
    if (direction === undefined) direction = "horizontal";

    const [currentIndex, setCurrentIndex] = useState(0);
    const [fading, setFading] = useState(false);
    const [fadeDirection, setFadeDirection] = useState("out-down");
    const [slideshowDirection, setSlideshowDirection] = useState(direction);

    const nextSlide = () => {
        if (currentIndex < props.children.length - 1)
        {
            setFading(true);
            if (slideshowDirection === "vertical")
            {
                setFadeDirection("out up");
            }
            else
            {
                setFadeDirection("out left");
            }
            setTimeout(() => {
                setCurrentIndex(currentIndex + 1);
                if (slideshowDirection === "vertical")
                {
                    setFadeDirection("in down");
                }
                else
                {
                    setFadeDirection("in right");
                }
                
                setTimeout(() => setFading(false), 250);
            }, 250);
        }
    }

    const prevSlide = () => {
        if (currentIndex > 0)
        {
            setFading(true);
            if (slideshowDirection === "vertical")
            {
                setFadeDirection("out down");
            }
            else
            {
                setFadeDirection("out right");
            }
            setTimeout(() => {
                setCurrentIndex(currentIndex - 1);
                if (slideshowDirection === "vertical")
                {
                    setFadeDirection("in up");
                }
                else
                {
                    setFadeDirection("in left");
                }
                setTimeout(() => setFading(false), 250);
            }, 250);
        }
    }

    return (
        <div className="slideshow" style={props.style}>
            <FontAwesomeIcon id={slideshowDirection + "-slideshow-prev"} icon={slideshowDirection === "vertical" ? "chevron-up" : "chevron-left"} onClick={prevSlide} className={currentIndex > 0 ? slideshowDirection + "-button" : slideshowDirection + "-button disable-button"} />
            <div className={fading ? "slide fading " + fadeDirection : "slide"}>
                {props.children[currentIndex]}
            </div>
            <FontAwesomeIcon id={slideshowDirection + "-slideshow-next"} icon={slideshowDirection === "vertical" ? "chevron-down" : "chevron-right"} onClick={nextSlide} className={currentIndex < props.children.length - 1 ? slideshowDirection + "-button" : slideshowDirection + "-button disable-button"} />
        </div>
    );
}
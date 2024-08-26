import '../CSS/Social.css';

export default function Social(props)
{
    return (
        <li className="social" style={props.style}>
            <a href={props.src} target="_blank">
                <img src={props.img} />
            </a>
        </li>
    )
}
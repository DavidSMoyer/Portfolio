import '../CSS/Social.css';

export default function Social(props)
{
    return (
        <li className="social" style={props.style}>
            <a href={props.src}>
                <img src={props.img} />
            </a>
        </li>
    )
}
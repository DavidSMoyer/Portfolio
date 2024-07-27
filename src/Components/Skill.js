import '../CSS/Skill.css';

export default function Skill(props)
{
    return props.img != undefined ? (
        <li className={"skill " + props.skillLevel}>
            <img src={props.img} />
            <div className='skill-overlay hidden'>
                <h3>{props.tooltip}</h3>
            </div>
        </li>
    ) : (
        <li className={"skill " + props.skillLevel}>
            <p>{props.text}</p>
        </li>
    )
}
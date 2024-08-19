import '../CSS/Project.css';

export default function Project(props)
{
    // ID
    // Title
    // Thumbnail Link
    // Short Description

    return (
        <div className='project'>
            <h3>{props.title}</h3>
            <div class="project-img">
                <img src={props.thumbnail} />
            </div>
            <p>{props.description}</p>
        </div>
    )
}
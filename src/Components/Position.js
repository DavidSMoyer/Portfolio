import '../CSS/Position.css';

export default function Position(props)
{
    // props.job
    // props.startDate
    // props.endDate
    // props.employer
    // props.description
    // props.link
    // props.logo

    // Expected input: "January 20 2004"

    let monthsToValue = {};
    monthsToValue["January"] = 1;
    monthsToValue["February"] = 2;
    monthsToValue["March"] = 3;
    monthsToValue["April"] = 4;
    monthsToValue["May"] = 5;
    monthsToValue["June"] = 6;
    monthsToValue["July"] = 7;
    monthsToValue["August"] = 8;
    monthsToValue["September"] = 9;
    monthsToValue["October"] = 10;
    monthsToValue["November"] = 11;
    monthsToValue["December"] = 12;

    let startDateString = props.startDate.split(' ');
    let endDateString = props.endDate.split(' ');

    let startDate = new Date(monthsToValue[startDateString[0]] + "/" + startDateString[1] + "/" + startDateString[2]);
    let endDate = new Date(monthsToValue[endDateString[0]] + "/" + endDateString[1] + "/" + endDateString[2]);

    let months = Math.abs(endDate.getFullYear() - startDate.getFullYear()) * 12;
    months -= startDate.getMonth();
    months += endDate.getMonth();
    months = months < 0 ? 0 : months;
    let years = Math.floor(months / 12);
    months = months - (years * 12);

    return (
        <li className="job-position">
            <div className="job-logo" onClick={() => window.open(props.link)}>
                <img src={props.logo} alt={props.employer + " logo"} />
            </div>
            <div className="job-info">
                <div className="job-title">
                    <h2>{props.title} at {props.employer}</h2>
                    <h2>{startDateString[0]} {startDateString[2]} - {endDateString[0]} {endDateString[2]}</h2>
                </div>
                <h3 className="job-duration">
                    Positioned lasted 
                    {years > 0 ? " " + years + " year" + (years > 1 ? "s " : " ") : ""}
                    {years > 0 && months === 0 ? "." : ""}
                    {months > 0 ? months + " month" + (months > 1 ? "s" : "") : ""}
                </h3>
                <p className="job-desc">{props.description}</p>
                <div class="job-skills">
                    <h3>Skills Used:</h3>
                    <ul class="job-skill-list">
                        {
                            props.skills.split(' ').map(skill => {
                                return (<li class="job-skill">{skill}</li>)
                            })
                        }
                    </ul>
                </div>
            </div>
        </li>
    )
}
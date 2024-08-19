import '../CSS/Education.css';

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
    let years = Math.ceil(months / 12);

    return (
        <li className="education">
            <div className="school-logo" onClick={() => window.open(props.link)}>
                <img src={props.logo} alt={props.name + " logo"} />
            </div>
            <div className="school-info">
                <div className="school-title">
                    <h2>{props.name}</h2>
                    <h2>{startDateString[0]} {startDateString[2]} - {endDateString[0]} {endDateString[2]}</h2>
                </div>
                <h3 className="school-duration">
                    Studied for
                    {years > 0 ? " " + years + " year" + (years > 1 ? "s " : " ") : ""}
                </h3>
                <p className="school-desc">{props.description}</p>
            </div>
        </li>
    )
}
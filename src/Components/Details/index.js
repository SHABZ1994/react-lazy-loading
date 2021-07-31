import { useContext } from "react";
import { withRouter } from "react-router"
import { AppContext } from "../Provider";

const Details = (props) => {
    const { data } = useContext(AppContext);
    const { match: { params: { details } } } = props;
    const { skills = {} } = data[details] || {}
    return (<div>
        <h2>Showing skills of {details.toUpperCase()}</h2>
        {skills && <table>
            <thead>
                <tr>
                    <th>Technology</th>
                    <th>Years Of Experience</th>
                </tr>
            </thead>
            <tbody>
                {Object.keys(skills).map(skill => (
                    <tr key={skill}>
                        <td>{skill}</td>
                        <td>{skills[skill]}</td>
                    </tr>
                ))}
            </tbody>
        </table>}
    </div>)
}

export default withRouter(Details)
import { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AppContext } from '../Provider'

const Home = () => {
    //useContext returns a context, destructuring the context
    const { data } = useContext(AppContext);
    const keys = Object.keys(data);
    return (<table>
        {keys.length > 0 && (
            <thead>
                <tr>
                    <td>NAME</td>
                    <td>PROFESSION</td>
                    <td>YEARS OF EXP.</td>
                </tr>
            </thead>)}
        <tbody>
            {keys.map(emp => (
                <tr key={emp}>
                    <td><Link to={`/${emp}`}>{emp}</Link></td>
                    <td>{data[emp].profession}</td>
                    <td>{data[emp].totalYearsOfExp}</td>
                </tr>
            ))}
        </tbody>
    </table >)
}

export default Home
import { Link } from "react-router-dom"

export const Navigation = () => {
    return (<div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start'
    }}>
        <header style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        }}>
            <Link to="/" style={{
                padding: '16px 0px'
            }}>Home</Link>
        </header>
    </div>)
}
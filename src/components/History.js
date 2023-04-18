import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const History = () => {
    return (
        <div>
            <div>History</div>
            <nav>
                <Link to="company">Our Companies</Link>
                <Link to="team">Team</Link>
            </nav>
            <Outlet />
        </div>
    )
}

export default History

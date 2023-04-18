import React from 'react'
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div>Home</div>
            <Button label='Mission' onClick={() => navigate('/mission')} />
        </div>
    )
}

export default Home

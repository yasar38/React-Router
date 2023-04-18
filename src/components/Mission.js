import React from 'react'
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

const Mission = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div>Mission</div>
            <Button label='Home' onClick={() => navigate('/')} />
        </div>
    )
}

export default Mission

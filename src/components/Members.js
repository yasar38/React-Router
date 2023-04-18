import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { Button } from 'primereact/button';

export default function Members() {
    const [searchParams, setSearchParams] = useSearchParams()
    const isActive = searchParams.get('filter') === 'active'
    return (
        <div>
            <div>Members</div>
            <Button label='Aktif Üyeler' onClick={() => setSearchParams({ filter: 'active' })} />
            <Button label='Tüm Üyeler' onClick={() => setSearchParams()} />
            {isActive ? <h2>Aktif Üyeler</h2> : <h2>Tüm Üyeler</h2>}
        </div>
    )
}

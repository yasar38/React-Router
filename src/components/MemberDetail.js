import React from 'react'
import { useParams } from 'react-router-dom'

export default function MemberDetail() {
    const { memberId } = useParams()
    return (
        <div>
            MemberDetail {memberId}
        </div>
    )
}

import React from 'react';
export default function Users ({match}) {
    return (
        <div>
            <h1>Hello {match.params.name}</h1>
        </div>
    )
}
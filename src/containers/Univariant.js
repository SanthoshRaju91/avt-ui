import React from 'react';
import { useParams } from 'react-router-dom';

function Univariant() {
    const { type } = useParams();

    return (
        <div>
            <h1>Univariant {type}</h1>
        </div>
    )
}

export default Univariant;
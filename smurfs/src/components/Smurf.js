import React from 'react';

const Smurf = props => {
    return (
        <div className="Smurf">
            <h1>{props.smurf.name}</h1>
            <h4>Age: {props.smurf.age}</h4>
            <h4>Height: {props.smurf.height}</h4>
        </div>
    );
}

export default Smurf;
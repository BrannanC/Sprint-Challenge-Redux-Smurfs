import React from 'react';

const Smurf = props => {
    return (
        <div className="Smurf">
            <h1>{props.smurf.name}</h1>
            <h4>Age: {props.smurf.age}</h4>
            <h4>Height: {props.smurf.height}</h4>
            <button onClick={e => props.toggleUpdate(e, props.index)}>Update</button>
            <button onClick={e => props.deleteSmurf(e, props.smurf.id)}>Delete</button>
            {props.index === props.smurfToUpdate &&
                        <form onSubmit={e => props.updateSmurf(e, {...props.update, id: props.smurf.id})} >
        
                        <div>
                            <input type="text" name="name" placeholder="Name..." value={props.update.name} onChange={props.handleChange} />
                            <input type="number" name="age" placeholder="Age..." value={props.update.age} onChange={props.handleChange} />
                            <input type="text" name="height" placeholder="Height..." value={props.update.height} onChange={props.handleChange} />
                            <button type="submit">Update Smurf</button>
                        </div>
        
                    </form>
            }
        </div>
    );
}

export default Smurf;
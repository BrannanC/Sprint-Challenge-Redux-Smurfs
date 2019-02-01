import React from 'react';
import { connect } from 'react-redux';

import { addSmurf } from '../actions';

class SmurfForm extends React.Component {
    state = {
        displayForm: false,
        name: '',
        age: '',
        height: ''
    }

    toggleForm = e => {
        e.preventDefault();
        this.setState(prevState => ({
            displayForm: !prevState.displayForm
        }))
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addSmurf = (e) => {
        e.preventDefault();
        this.props.addSmurf(this.state);
        this.setState({
            name: '',
            age: '',
            height: '',
            displayForm: false
        })
    }

    render(){
        return (
            <div className="SmurfForm">
                <button onClick={this.toggleForm}>{this.state.displayForm ? 'X' : 'Add Smurf'}</button>
                <form onSubmit={this.addSmurf} >

                <div className={this.state.displayForm ? 'inputs' : 'hidden'} >
                    <input type="text" name="name" placeholder="Name..." value={this.state.name} onChange={this.handleChange} />
                    <input type="number" name="age" placeholder="Age..." value={this.state.age} onChange={this.handleChange} />
                    <input type="text" name="height" placeholder="Height..." value={this.state.height} onChange={this.handleChange} />
                    <button type="submit">Add Smurf to Village</button>
                </div>

            </form>
            </div>
        );
    }
}

export default connect(null, { addSmurf })(SmurfForm);
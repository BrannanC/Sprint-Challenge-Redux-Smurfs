import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs, updateSmurf, deleteSmurf } from '../actions';

import Smurf from './Smurf';
import SmurfForm from './SmurfForm';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state = {
    smurfToUpdate: null,
    update: {
      name: '',
      age: '',
      height: ''
    }
  }

  componentDidMount(){
    this.props.getSmurfs();
  }

  toggleUpdate = (e, id) => {
    e.preventDefault();
    this.setState(prevState => ({
      smurfToUpdate: prevState.smurfToUpdate === id ? null : id
    }))
  }

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevState => ({
      update: {
        ...prevState.update,
        [name]: value
      }
    }))
  }

  updateSmurf = (e, smurf) => {
    e.preventDefault();
    this.props.updateSmurf(smurf);
    this.setState({
      smurfToUpdate: null,
      update: {
        name: '',
        age: '',
        height: ''
      }
    })
  }

  deleteSmurf = (e, id) => {
    e.preventDefault();
    console.log(id);
    this.props.deleteSmurf(id);
  }

  render() {
    return (
      <div className="App">
        {this.props.fetchingSmurfs && <h1>Getting smurfs</h1>}
        {this.props.smurfs && this.props.smurfs.map((smurf, i) => <Smurf 
                                                                  smurf={smurf} 
                                                                  key={smurf.name + i} 
                                                                  toggleUpdate={this.toggleUpdate} 
                                                                  smurfToUpdate={this.state.smurfToUpdate}
                                                                  index={i}
                                                                  update={this.state.update}
                                                                  handleChange={this.handleChange}
                                                                  updateSmurf={this.updateSmurf}
                                                                  deleteSmurf={this.deleteSmurf}
                                                                  />)}
        <SmurfForm />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetchingSmurfs: state.fetchingSmurfs,
  addingSmurf: state.addingSmurf,
  updatingSmurf: state.updatingSmurf,
  deletingSmurf: state.deletingSmurf,
  error: state.error
})

export default connect(mapStateToProps, { getSmurfs, updateSmurf, deleteSmurf })(App);

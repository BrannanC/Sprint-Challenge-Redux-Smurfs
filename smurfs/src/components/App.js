import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';

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

  componentDidMount(){
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className="App">
        {this.props.fetchingSmurfs && <h1>Getting smurfs</h1>}
        {this.props.smurfs && this.props.smurfs.map((smurf, i) => <Smurf smurf={smurf} key={smurf.name + i} />)}
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

export default connect(mapStateToProps, { getSmurfs })(App);

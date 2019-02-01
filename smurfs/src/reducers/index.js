import {ADDING_SMURF, ADDING_SMURF_SUCCESS, ADDING_SMURF_FAILURE} from '../actions';
import {FETCHING_SMURFS, FETCHING_SMURFS_SUCCESS, FETCHING_SMURFS_FAILURE} from '../actions';
import { UPDATING_SMURF, UPDATING_SMURF_SUCCESS, UPDATING_SMURF_FAILURE } from '../actions';


 const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 }

const smurfReducer = (state = initialState, action) => {
  switch(action.type){
    case FETCHING_SMURFS:
      return {
        ...state,
        fetchingSmurfs: true
      };
    case FETCHING_SMURFS_SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        error: null,
        smurfs: action.payload
      };
    case FETCHING_SMURFS_FAILURE:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload
      };
    case ADDING_SMURF:
      return {
        ...state,
        addingSmurf: true
      };
    case ADDING_SMURF_SUCCESS:
      return {
        ...state,
        addingSmurf: false,
        error: null,
        smurfs: action.payload
      };
    case ADDING_SMURF_FAILURE:
      return {
        ...state,
        addingSmurf: false,
        error: action.payload
      };
    case UPDATING_SMURF:
      return {
        ...state,
        updatingSmurf: true
      };
    case UPDATING_SMURF_SUCCESS:
      return {
        ...state,
        updatingSmurf: false,
        error: null,
        smurfs: action.payload
      };
    case UPDATING_SMURF_FAILURE:
      return {
        ...state,
        updatingSmurf: false,
        error: action.payload
      };
    case 'DELETE_SMURF':
    return {
      ...state,
      smurfs: action.payload
    }
    default:
      return state;
  }
}
/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export default smurfReducer;

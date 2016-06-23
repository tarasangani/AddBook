import { combineReducers } from 'redux';
import { browserHistory } from 'react-router'
import { findIndex, remove } from 'lodash';

const PersonRedu = (state = [], action) => {
  if(action.type === "SAVE_CONTACT") {
    let newC = {
      id: state.length + 1,
      ...action.data
    }
    let newState = state.concat(newC);

    return newState;
  }

  if(action.type === "SAVE_EDITED") {

    let j = findIndex(state, (o)=> {
      return (o.id == action.data.id);
    });

    if(j >= 0) {
      let newState = state;
      newState[j] = action.data;
      return newState;
    }
  }

  if(action.type === "DELETE") {
    let newState = remove(state, (o)=> {
      return (o.id != action.id);
    });

    return newState;
  }

   return state;
}

const combined = combineReducers({
  Person: PersonRedu
});

export default combined;

import React from "react";
import ReactDOM from "react-dom";

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import { Router, Route, Link, browserHistory } from 'react-router';

import Home from './Home';
import AddNew from './AddNew';
import Edit from './EditPerson';
import RootReducer from './reducers';
import data from './data';



let store = createStore(RootReducer, data);

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={Home} />
          <Route path="/Person/:id" component={Edit} />
          <Route path="add" component={AddNew} />
        </Router>
      </Provider>
    );
  }
}

const app = document.getElementById('app');

ReactDOM.render(<App />, app);

import React from "react";
import ReactDOM from "react-dom";

import Header from './Header';
import List from './ContactList';

export default class Home extends React.Component {
  constructor(props, context) {
    super(props);
  }

  render() {
    return (
      <div class="col-lg-12">
        <Header active="Home" />
        <List />
      </div>
    );
  }
}

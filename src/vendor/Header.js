import React from "react";
import ReactDOM from "react-dom";
import { Link } from 'react-router';
export default class Home extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <header>
        <nav class="navbar navbar-default">
          <div class="container-fluid">
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul class="nav navbar-nav">
                <li class={(this.props.active === "Home") ? "active" : "" }><Link to="/">Home</Link></li>
                <li class={(this.props.active === "New") ? "active" : "" }><Link to="/add">Add New</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

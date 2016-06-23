import React from "react";
import ReactDOM from "react-dom";

export default class ContactItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    }
  }

  render() {
    return (
      <div class="CItem" onClick={() => {this.props.onTouch(this.props.id)}}>
        <p>{`${this.props.firstname} ${this.props.lastname}`}</p>
      </div>
    );
  }
}

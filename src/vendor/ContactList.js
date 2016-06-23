import React from "react";
import ReactDOM from "react-dom";
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'

import ContactItem from './ContactItem';
class List extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    }
  }

  goTo = (id) => {
    browserHistory.push(`/Person/${id}`);
  }

  renderItems = () => {
    let t = this.props.Person.map((thePerson) => {
      return (
        <ContactItem id={thePerson.id} onTouch={this.goTo} key={thePerson.id} firstname={thePerson.firstname} lastname={thePerson.lastname} />
      );
    });

    return t;
  }

  render() {
    return (
      <div class="list-container col-lg-8">
        {this.renderItems()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    Person: state.Person
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

const ListView = connect(mapStateToProps,mapDispatchToProps)(List);
export default ListView;

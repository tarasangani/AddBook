import React from "react";
import ReactDOM from "react-dom";
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { findIndex } from 'lodash';

import Actions from './Actions';
import Header from './Header';

class Person extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      firstname: "",
      lastname: "",
      address1: "",
      address2: "",
      city: "",
      zip: "",
      state: "",
      email: "",
      birthday: new Date()
    }
  }

  componentWillReceiveProps(nextProps) {
  }

  getData = (id) => {
    let j = findIndex(this.props.user, (o)=> {
      return (o.id == id);
    });

    if(j >= 0) {

      let p = this.props.user[j];

      this.setState({
        id: p.id,
        firstname: p.firstname,
        lastname: p.lastname,
        address1: p.address1,
        address2: p.address2,
        city: p.city,
        zip: p.zip,
        state: p.state,
        email: p.email,
        birthday: p.birthday
      })

    }
    else {
      console.error("No User found");
    }

  }

  saveData = () => {
    this.props.saveEdited({
      id: this.state.id,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      address1: this.state.address1,
      address2: this.state.address2,
      city: this.state.city,
      zip: this.state.zip,
      state: this.state.state,
      email: this.state.email,
      birthday: this.state.birthday
    });
  }

  componentDidMount() {
    this.getData(this.props.params.id)
  }

  del = () => {
    let prompt = confirm("Are you sure?");
    if(prompt) {
      this.props.deletePerson(this.props.params.id);
      browserHistory.push('/');
    }

  }

  render() {
    return (
      <div class="col-lg-12">
        <Header active="Edit" />

        <h2>New Contact</h2>
          <div class="AddForm col-lg-6">
            <form method="post" submit={false} action="" onSubmit={(e) => {
              e.preventDefault();
              this.saveData();
              browserHistory.push('/');
            }}>
              <div class="form-group">

                <label for="firstname">First Name:</label>
                <input class="form-control" value={this.state.firstname}
                  onChange={(e)=> {
                    this.setState({firstname: e.target.value});
                  }} type="text" name="firstname" required />

              </div>
              <div class="form-group">

                <label for="lastname">Last Name:</label>
                <input class="form-control" value={this.state.lastname}
                  onChange={(e)=> {
                    this.setState({lastname: e.target.value});
                  }}
                 type="text" name="lastname" required />

              </div>

              <div class="form-group">

                <label for="address1">Address Line 1:</label>
                <input class="form-control" value={this.state.address1}
                  onChange={(e)=> {
                    this.setState({address1: e.target.value});
                  }}
                 type="text" name="address1" required />

              </div>
              <div class="form-group">

                <label for="address2">Address Line 2:</label>
                <input class="form-control" value={this.state.address2}
                  onChange={(e)=> {
                    this.setState({address2: e.target.value});
                  }}
                 type="text" name="address2" required />

              </div>
              <div class="form-group">

                <label for="city">City:</label>
                <input class="form-control" value={this.state.city}
                  onChange={(e)=> {
                    this.setState({city: e.target.value});
                  }}
                  type="text" name="city" required />

              </div>
              <div class="form-group">

                <label for="state">State:</label>
                <input class="form-control" value={this.state.state}
                  onChange={(e)=> {
                    this.setState({state: e.target.value});
                  }}
                 type="text" name="state" required />

              </div>
              <div class="form-group">

                <label for="zip">Zip Code:</label>
                <input class="form-control" value={this.state.zip}
                  onChange={(e)=> {
                    this.setState({zip: e.target.value});
                  }}
                 type="text" name="zip" required />

              </div>
              <div class="form-group">

                <label for="email">Email:</label>
                <input class="form-control" value={this.state.email}
                  onChange={(e)=> {
                    this.setState({email: e.target.value});
                  }}
                type="email" name="email" required />

              </div>
              <div class="form-group">
                <label for="birthday">Birthday: </label>
                <input type="date" name="birthday" value={this.state.birthday}
                  onChange={(e)=> {
                    console.log(`Current: ${this.state.birthday}`);
                    this.setState({birthday: e.target.value});
                  }}/>
              </div>
              <div class="form-group">
                <input class="btn btn-success btn-md" type="submit" required />
                <input class="btn btn-danger btn-md" value="Delete" type="button" onClick={this.del} required />
              </div>
            </form>
          </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    user: state.Person
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveEdited: (data) => {
      dispatch(Actions.saveEdited(data));
    },
    deletePerson: (id) => {
      dispatch(Actions.deleteItem(id));
    }
  }
}

const PersonView = connect(mapStateToProps,mapDispatchToProps)(Person);

export default PersonView;

import React, {Component} from 'react';
import UserRow from './UserRow';

class UserList extends Component {

  constructor(props) {
    super(props);
    // set the default values
    this.state = {
      users: []
    };
  }

  componentDidMount() {
      fetch('http://18.217.22.8:4000/fullStackApp/', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        return response.json();
      })
      .then(data => {this.setState({"users" : data});})
      .catch(err => {
          console.log("fetch error" + err);
      });
  }

  userRowData() {
    // get the array data
    return this.state.users.map((obj, index) => {
      return <UserRow obj={obj} key={index}/>
    });
  }

  // override method of React.Component
  render() {
    // reder the screen
    return (
      <div>
        <h3 align="center">Employees List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Middle Name</th>
              <th>Last Name</th>
              <th colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.userRowData()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default UserList;

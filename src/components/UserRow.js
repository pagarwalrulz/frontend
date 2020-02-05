import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UserRow extends Component {

  render() {
      return (
          <tr>
              <td>{this.props.obj.a_firstName}</td>
              <td>{this.props.obj.a_middleName}</td>
              <td>{this.props.obj.a_lastName}</td>
              <td>
                <Link to={'/view/' + this.props.obj._id} className="btn btn-primary">
                    View
                </Link>
                <div class="divider"/>
                <Link to={'/edit/' + this.props.obj._id} className="btn btn-primary">
                    Edit
                </Link>
                <div class="divider"/>
                <Link to={'/delete/' + this.props.obj._id} className="btn btn-primary">
                    Delete
                </Link>
              </td>
          </tr>
      );
  }
}

export default UserRow;

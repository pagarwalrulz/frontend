import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class ViewPage extends Component {

  constructor(props) {
    super(props);
    // set the default values
    this.state = {
      a_firstName: '',
      a_middleName: '',
      a_lastName: ''
    };
  }

  componentDidMount() {
    // calling the method to read the user details
    fetch('http://18.217.22.8:4000/fullStackApp/' + this.props.match.params.id, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      return response.json();
    })
    .then(data => {
      this.setState({
        a_firstName : data.a_firstName,
        a_middleName : data.a_middleName,
        a_lastName : data.a_lastName,
      });
    })
    .catch(err => {
        console.log("fetch error" + err);
    });
  }

  // override method of React.Component
  render() {
    // construct the html element to render the page
    return (

      <form>

    		<header>
    			<center><h1>View User Deails</h1></center>
    		</header>

        <div class="container">

    			<label for="a_firstName"><b>First Name</b></label>
    			<input type="text" name="a_firstName"
            value={this.state.a_firstName} readonly/>

          <label for="a_middleName"><b>Middle Name</b></label>
    			<input type="text" name="a_middleName"
            value={this.state.a_middleName} readonly/>

          <label for="a_lastName"><b>Last Name</b></label>
    			<input type="text" name="a_lastName"
            value={this.state.a_lastName} readonly/>
          <br/>
          <center><Link to="/list" className="btn btn-primary">Close</Link></center>
    		</div>

    	</form>
    )
  }
}

export default ViewPage;

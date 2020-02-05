import React, {Component} from 'react';

class UserRegistration extends Component {

  constructor(props) {
    super(props);
    // set the default values
    this.state = {
      a_firstName: '',
      a_middleName: '',
      a_lastName: ''
    }
    // bind the state
    this.onChange=this.onChange.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onSubmit(event) {
    event.preventDefault();
    // preparing the data which will be passed in request body
    const data = {a_firstName: this.state.a_firstName,
        a_middleName: this.state.a_middleName,
        a_lastName: this.state.a_lastName};

    fetch('http://18.217.22.8:4000/fullStackApp/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
    .then(function(response) {
      if (response.status === 200) {
        // route the list page
        return window.location.href="/list";
      } else {
        alert('Adding new record failed');
      }
    })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
  }

  // override method of React.Component
  render() {
    // construct the html element to render the page
    return (

      <form
        onSubmit={this.onSubmit}>

    		<header>
    			<center><h1>Employee Registration</h1></center>
    		</header>

        <div class="container">

    			<label for="a_firstName"><b>First Name</b></label>
    			<input type="text" placeholder="Enter First Name" name="a_firstName"
            onChange={this.onChange} required/>

          <label for="a_middleName"><b>Middle Name</b></label>
    			<input type="text" placeholder="Enter Middle Name" name="a_middleName"
            onChange={this.onChange} required/>

          <label for="a_lastName"><b>Last Name</b></label>
    			<input type="text" placeholder="Enter Last Name" name="a_lastName"
            onChange={this.onChange} required/>
          <br/>
    			<center><button type="submit" className="btn btn-primary">Submit</button></center>
    		</div>

    	</form>
    )
  }
}

export default UserRegistration;

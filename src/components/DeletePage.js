import React, {Component} from 'react';

class DeletePage extends Component {

  constructor(props) {
    super(props);
    this.onSubmit=this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();

    fetch('http://18.217.22.8:4000/fullStackApp/delete/' + this.props.match.params.id, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'}
    })
    .then(function(response) {
      if (response.status === 200) {
        // route the list page
        return window.location.href="/list";
      } else {
        alert('Deletion of record failed');
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
    			<center><h1>Delete User Details</h1></center>
    		</header>

        <div class="container">
          <p class="divider"/>
          <center><p>Are you sure you want to delete this user?</p></center>
          <center><button type="submit" className="btn btn-primary">Confirm</button></center>
        </div>

    	</form>
    )
  }
}

export default DeletePage;

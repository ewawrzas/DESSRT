import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.logout();
  }

  render () {
    if (this.props.currentUser) {
      return (
        <div>
          <h2>Your Recent Activity</h2>
          {this.props.currentUser.username}
          <br/>
          <button onClick={this.handleClick}>Logout</button>
        </div>
      );
    } else {
      return (
        <div>
          <Link to="/signup">CREATE AN ACCOUNT</Link><br/>
          <Link to="/login">SIGNIN</Link>
        </div>
      );
    }
  }
}

export default Greeting;

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
    if (!this.props.currentUser) {
      return (
        <div>
          <h1>DESSRT</h1>
          <h4>EAT SOCIALLY</h4>
          <Link to="/signup">CREATE AN ACCOUNT</Link><br/>
          <Link to="/login">SIGNIN</Link>
        </div>
      );
    } else {
      return (
        <div className="greeting">
          {this.props.currentUser.username}
          <h2>Your Recent Activity</h2>
          <br/>
          <button id="logout" onClick={this.handleClick}>Logout</button>
        </div>
      );
    }
  }
}

export default Greeting;

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
          <header className="navBar">
            <div>
              <h1>DESSRT</h1>
              <h4>EAT SOCIALLY</h4>
            </div>
            <div className="welcome">
              <h2>Welcome</h2>
              {this.props.currentUser.username}
            </div>
              <ul id="navLinks">
                <button id="logout" onClick={this.handleClick}>Logout</button>
              </ul>
          </header>
          <h2>Your Recent Activity</h2>
          <br/>

        </div>
      );
    }
  }
}

export default Greeting;

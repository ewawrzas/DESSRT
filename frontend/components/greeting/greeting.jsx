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
          <div className="homeNav">
            <header className="navBar">
              <div className="homeLogo">
                <h1>DESSRT</h1>
              </div>
                <ul id="homeNavLinks">
                  <button id="logout" onClick={this.handleClick}>Logout</button>
                </ul>
            </header>
          </div>
          <div className="homePage">
            <h2 id="feed">Your Recent Activity</h2>
            <div className="welcome">
              <h3>Welcome</h3>
              {this.props.currentUser.username}
            </div>
          </div>
      </div>
      );
    }
  }
}

export default Greeting;

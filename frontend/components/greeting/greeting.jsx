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
      return (
        <div className="greeting">
          <div className="homeNav">
            <header className="navBar">
              <div className="homeLogo">
                <h1>DESSRT</h1>
              </div>
                <ul id="homeNavLinks">
                  <button id="logout" onClick={this.handleClick}>Logout</button>
                  <button id="addDessert">Add Dessert will go here</button>
                </ul>
            </header>
            <div className="searchDiv">
              <h4>Search will go here</h4>
            </div>
          </div>
          <div className="homePage">
            <div className="homeContent">
              <p id="user">{this.props.currentUser.username}</p>
            </div>
            <h2 id="feed">Your Recent Activity</h2>

          </div>
      </div>
      );
    }

}

export default Greeting;

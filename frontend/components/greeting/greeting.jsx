import React from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
import updateFormContainer from '../profile/update_form_container';

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
            <div className="searchDrop">
              <Link to="/home/update" id="updateLink" >Update</Link>
              <div className="searchDiv">
                <h4>Search will go here</h4>
              </div>
            </div>
          </div>
          <div className="homePage">
            <div className="homeContent">
              <p id="user">{this.props.currentUser.username}</p>
            </div>
            <h2 id="feed">Your Recent Activity</h2>
            <Route path="/update" component={updateFormContainer} />
          </div>
      </div>
      );
    }

}

export default Greeting;

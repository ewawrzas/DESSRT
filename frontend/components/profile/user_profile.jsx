import React, { Component } from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
import updateFormContainer from '../profile/update_form_container';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.logout();
  }

  componentDidMount() {
    this.props.fetchSingleUser(this.props.match.params.userId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.userId !== nextProps.match.params.userId) {
      this.props.fetchSingleUser(nextProps.match.params.userId);
    }
  }

  render () {
    const { user } = this.props;
    debugger


    if (!user) return null;

      return (
        <div className="greeting">
          <div className="userProfileNav">
            <header className="navBar">
              <div className="userProfileLogo">
                <h1>DESSRT</h1>
              </div>
                <ul id="homeNavLinks">
                  <button id="logout" onClick={this.handleClick}>Logout</button>
                  <button id="addDessert">Add Dessert will go here</button>
                </ul>
            </header>
            <div className="searchDrop">
              <Link to="/users/:userId/update" id="updateLink" >Update</Link>
              <div className="searchDiv">
                <h4>Search will go here</h4>
              </div>
            </div>
          </div>
          <div className="homePage">
            <div className="userProfileContent">
              <h1>{this.props.user.username}</h1>
              // <p id="user">{this.props.currentUser.username}</p>
            </div>
            <h2>{this.props.user.username} Recent Activity</h2>
            // <Route path="/users/:userId/update" component={updateFormContainer} />
          </div>
      </div>
      );
    }

}

export default UserProfile;

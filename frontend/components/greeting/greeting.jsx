import React, { Component } from 'react';
import { Route, NavLink, Link } from 'react-router-dom';

import UserItem from '../profile/user_item'
import UpdateFormContainer from '../profile/update_form_container';
import UserProfileContainer from '../profile/user_profile_container';


class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.logout();
  }

  componentDidMount() {
    this.props.fetchAllUsers();
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

              <Link to={`/users/${this.props.currentUser.id}`} id="userLink">

              </Link>

            <div className="searchDiv">
              <h4>Search will go here</h4>
            </div>
          </div>
        </div>
        <div className="homePage">
          <div className="homeContent">
            <p id="user">{this.props.currentUser.username}</p>
          </div>
          <h2 id="feed">Recent Global Activity</h2>
            <ul>
              {this.props.users.map(user => <UserItem key={user.id} user={user} />)}
            </ul>

          <Route path ="/users/:userId" component={UserProfileContainer} />
          <Route path="/users/:userId/update" component={UpdateFormContainer} />
        </div>
    </div>
    );
  }

}

export default Greeting;

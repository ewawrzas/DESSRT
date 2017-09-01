import React, { Component } from 'react';
import { Route, NavLink, Link } from 'react-router-dom';

import UserItem from '../profile/user_item'
import DessertItem from '../desserts/dessert_item'
import UpdateFormContainer from '../profile/update_form_container';
import UserProfileContainer from '../profile/user_profile_container';
import DessertIndexContainer from '../desserts/dessert_index_container';
import CheckinIndexContainer from '../checkins/checkin_index_container';


class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.logout();
  }


  componentDidMount() {
    this.props.fetchAllDesserts();
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
              <Link to="/desserts" id="addDessert">Add Dessert</Link>
            </ul>
          </header>

          <div className="searchDrop">
            <Link to={`/users/${this.props.currentUser.id}`} id="userLink">My Profile</Link>
            
          </div>
        </div>

        <div className="homePage">
          <div className="homeContent">
            <p id="user">{this.props.currentUser.username}</p>
          </div>
          <CheckinIndexContainer />
          <h2 id="feed">testing links only</h2>
          <ul className="userList">
            {this.props.users.map(user => <UserItem key={user.id} user={user} />)}
          </ul>
          <ul className="userList">
            {this.props.desserts.map(dessert => <DessertItem key={dessert.id} dessert={dessert} />)}
          </ul>
          <Route path ="/users/:userId" component={UserProfileContainer} />
          <Route path="/users/:userId/update" component={UpdateFormContainer} />
        </div>


      </div>
    );
  }

}

export default Greeting;

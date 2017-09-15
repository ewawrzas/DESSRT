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
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      search: ""
    }
  }

  handleClick() {
    this.props.logout();
  }

  handleChange(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
    this.props.fetchAllDesserts(this.state).then(
      () => this.setState({
      search: ""
      })
    ).then(search => this.props.history.push(`/search`));
    }
  }

  render () {
    return (
      <div className="greeting">
        <div className="navBackground">
          <div className="homeNav">

            <header className="navBar">
              <div className="userProfileLogo">
                <Link to="/home"><h1 id="slogan1">DESSRT</h1><h5 id="slogan">EAT SOCIALLY</h5></Link>
              </div>
              <ul id="homeNavLinks">
                <button id="logout" onClick={this.handleClick}>Logout</button>
                <Link to="/desserts" id="addDessert">Add Dessert</Link>
                <Link to={`/users/${this.props.currentUser.id}`} id="userLink">My Profile</Link>
              </ul>
            </header>

            <div className="searchDrop">
              <div className="feedUserImgDiv">
                <img id="userFeedAvatar" src={this.props.currentUser.image}/>
              </div>
              <div className="searchContainer">
                <input
                  placeholder="Search for a dessert"
                  onKeyPress={ this.handleKeyPress }
                  onChange={ this.handleChange('search') }
                  className="searchBar"/>
              </div>
            </div>

          </div>
        </div>

        <div className="homePage">

          <div className="homeContent">
            <p id="user">{this.props.currentUser.username}</p>
          </div>
          <CheckinIndexContainer />
          <Route path ="/users/:userId" component={UserProfileContainer} />
          <Route path="/users/:userId/update" component={UpdateFormContainer} />
        </div>

      </div>
    );
  }

}

export default Greeting;

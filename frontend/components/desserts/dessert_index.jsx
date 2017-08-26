import React, { Component } from 'react';
import { Route, NavLink, Link } from 'react-router-dom';

import DessertItem from '../desserts/dessert_item'

import UserProfileContainer from '../profile/user_profile_container';


class DessertIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.logout();
  }

  componentDidMount() {
    this.props.fetchAllDesserts();
  }

  render () {

    return (
      <div className="dessertIndex">
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

              <Link to={`/users/${this.props.currentUser.id}`} id="userLink">My Profile</Link>

            <div className="searchDiv">
              <h4>Search will go here</h4>
            </div>
          </div>
        </div>

        <div className="dessertsHome">
          <h2 id="feed">All the Desserts</h2>
            <ul>
              {this.props.desserts.map(dessert => <DessertItem key={dessert.id} dessert={dessert} />)}
            </ul>


        </div>
    </div>
    );
  }

}

export default DessertIndex;

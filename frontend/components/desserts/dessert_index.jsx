import React, { Component } from 'react';
import { Route, NavLink, Link } from 'react-router-dom';

import DessertItem from './dessert_item'
import DessertProfileContainer from './dessert_profile_container';
import DessertFormContainer from './dessert_form_container';
import UserProfileContainer from '../profile/user_profile_container';
import DessertForm from './dessert_form';

const DESSERT_TYPES = ['custard/pudding', "frozen", 'cake', 'cookie', 'pie', 'chocolate/candy', 'pastry', 'miscellaneous']
const DESSERT_ORIGINS = ["homemade", "store bought", "restaurant/cafe", "other"]

class DessertIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.dessertId !== nextProps.match.params.dessertId) {
      this.props.fetchSingleDessert(nextProps.match.params.dessertId);
    }
  }

  handleClick() {
    this.props.logout();
  }

  componentDidMount() {
    this.props.fetchAllDesserts();
  }

  render () {
    return (
      <div>

        <div className="homeNav">
          <header className="navBar">
            <div className="homeLogo">
              <Link to="/home"><h1>DESSRT</h1></Link>
            </div>
            <ul id="homeNavLinks">
              <button id="logout" onClick={this.handleClick}>Logout</button>
            </ul>
          </header>
          <div className="searchDrop">
              <Link to={`/users/${this.props.currentUser.id}`} id="userLink">My Profile</Link>
            <div className="searchDiv">
              <h4>Search will go here</h4>
            </div>
          </div>
        </div>

        <div className="dessertsDiv">
          <DessertFormContainer />
          <div className="dessertsHome">
            <h2 id="feed">All the Desserts</h2>
              <ul>
                {this.props.desserts.map(dessert => <DessertItem key={dessert.id} dessert={dessert} />)}
              </ul>
            <Route path ="/users/:userId" component={UserProfileContainer} />
            <Route path="/desserts/:dessertId" component={DessertProfileContainer} />
          </div>
        </div>

      </div>

    );
  }

}

export default DessertIndex;

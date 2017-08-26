import React, { Component } from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
import updateFormContainer from '../profile/update_form_container';

class DessertProfile extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.logout();
  }

  componentDidMount() {
    this.props.fetchSingleDessert(this.props.match.params.dessertId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.dessertId !== nextProps.match.params.dessertId) {
      this.props.fetchSingleDessert(nextProps.match.params.dessertId);
    }
  }

  render () {
    const { dessert } = this.props;

    if (!dessert) return null;

      return (
        <div className="dessertProfile">
          <div className="dessertProfileNav">

            <header className="navBar">
              <div className="homeLogo">
                <Link to="/home"><h1>DESSRT</h1></Link>
              </div>
              <ul id="homeNavLinks">
                <button id="logout" onClick={this.handleClick}>Logout</button>
                <button id="addDessert">Add Dessert</button>
              </ul>
            </header>

            <div className="searchDrop">
              <Link to={`/users/${this.props.currentUser.id}`} id="userLink">My Profile</Link>
              <div className="searchDiv">
                <h4>Search will go here</h4>
              </div>
            </div>
          </div>

          <div className="dessertPage">
            <div className="dessert">
              <h1 id="name">{this.props.dessert.name}</h1>
            </div>
            <h2 id="feedIntro">Recent Activity</h2>

            <Route path={`/desserts/${this.props.dessert.id}`} component={DessertProfileContainer} />
          </div>
      </div>
      );
    }

}

export default DessertProfile;

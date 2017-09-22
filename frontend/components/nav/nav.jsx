import React, { Component } from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
import NavContainer from './nav_container';


class Nav extends React.Component {
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


  render() {

    return (
      <div className="navBackground">
        <div className="userNav">

          <header className="navBar">
            <div className="userProfileLogo">
              <Link to="/home"><h1 id="slogan1">DESSRT</h1><h5 id="slogan">EAT SOCIALLY</h5></Link>
            </div>
            <ul id="homeNavLinks">
              <button id="logout" onClick={this.handleClick}>Logout</button>
              <Link to="/desserts" id="addDessert">Add Dessert</Link>
              <Link to={`/users/${this.props.currentUser.id}`} id="userLink">My Profile</Link>
              <Link to={`/account`}id="updateLink" >Account</Link>
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
    )
  }
}

export default Nav;

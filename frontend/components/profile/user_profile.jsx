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

    if (!user) return null;

    const link = (this.props.location.pathname === `/users/${this.props.currentUser.id}`) ? <Link to={`/users/${user.id}/update`}id="updateLink" >Update</Link> :
    <Link to={`/users/${this.props.currentUser.id}`} id="userLink">My Profile</Link>

      const image = (this.props.location.pathname === `/users/${this.props.currentUser.id}` ||
      `/users/${this.props.currentUser.id}/update`) ? "userProfileContent1" : "userProfileContent2"

      return (
        <div className="greeting">
          <div className="userProfileNav">

            <header className="navBar">
              <div className="userProfileLogo">
                <Link to="/home"><h1>DESSRT</h1></Link>
              </div>
              <ul id="homeNavLinks">
                <button id="logout" onClick={this.handleClick}>Logout</button>
                <button id="addDessert">Add Dessert</button>
              </ul>
            </header>
            <div id="profileLinks">
              <div id="logoNavLinks">
                {link}
              </div>

              <div className="searchDiv">
                <h4>Search will go here</h4>
              </div>
            </div>
          </div>

          <div className="homePage">
            <div className={image}>
              <h1 id="name">{this.props.user.username}</h1>
            </div>
            <h2 id="feedIntro">{`${this.props.user.username}'s`} Recent Activity</h2>
            <Route path={`/users/${this.props.currentUser.id}/update`} component={updateFormContainer} />
          </div>
      </div>
      );
    }

}

export default UserProfile;

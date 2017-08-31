import React, { Component } from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
import updateFormContainer from '../profile/update_form_container';
import CheckinIndexContainer from '../checkins/checkin_index_container';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.updateFile = this.updateFile.bind(this)
  }

  updateFile (e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = function () {
      this.setState({ imageFile: file, imageUrl: fileReader.result });
    }.bind(this);

    if (file) {
      fileReader.readAsDataURL(file);
    }
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

    const link = (this.props.location.pathname === `/users/${this.props.currentUser.id}`) ? <Link to={`/account`}id="updateLink" >Account</Link> :
    <Link to={`/users/${this.props.currentUser.id}`} id="userLink">My Profile</Link>

      const image = (this.props.location.pathname === `/users/${this.props.currentUser.id}` ||
      `/users/account`) ? "userProfileContent1" : "userProfileContent2"

      const { user } = this.props;

      if (!user) return null;

      return (
        <div className="greeting">

          <div className="homeNav">
            <header className="navBar">
              <div className="userProfileLogo">
                <Link to="/home"><h1>DESSRT</h1></Link>
              </div>
              <ul id="homeNavLinks">
                <button id="logout" onClick={this.handleClick}>Logout</button>
                <Link to="/desserts" id="addDessert">Add Dessert</Link>
              </ul>
            </header>
            <div className="searchDrop">
                {link}
              <div className="searchDiv">
                <h4>Search will go here</h4>
              </div>
            </div>
          </div>

          <div className="profilePage">
            <div className={image}>
              <img id="wallImg" src={this.props.user.wall_image}/>
              <div id="prof">
                <div className="userImgDiv">
                  <img id="userAvatar" src={this.props.user.image} />
                </div>
                <h1 id="name">{this.props.user.username}</h1>
              </div>
              <div id="imgIconContainer">
                <input className="profileInputFile" type="file" onChange={ this.updateFile }/>
              </div>
            </div>
            <CheckinIndexContainer />
            <Route path={`/account`} component={updateFormContainer} />
          </div>

        </div>
      );
    }

}

export default UserProfile;

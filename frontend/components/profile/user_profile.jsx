import React, { Component } from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
import updateFormContainer from '../profile/update_form_container';
import CheckinIndexContainer from '../checkins/checkin_index_container';
import CheckinItem from '../checkins/checkinItem'
import NavContainer from '../nav/nav_container'

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.updateFile = this.updateFile.bind(this);
    this.updateImage = this.updateImage.bind(this);
  }

  updateFile (e) {
    const file = e.currentTarget.files[0];
    if (file) {
      this.updateImage(file);
    }
  }

  updateImage(file) {
    const imgFile = file
    const formData = new FormData();
    formData.append("user[wall_image]", imgFile);

    this.props.updateUser(formData)
  };


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

    const upload = (this.props.location.pathname === `/users/${this.props.currentUser.id}`) ? "profileInputFile" : "hiddenUploadIcon"

    const { user, currentUser, deleteCheckin, fetchAllCheckins } = this.props;

      if (!user) return null;

      return (
        <div className="greeting">

          <NavContainer />

          <div className="profilePage">

            <div className='userProfileContent1'>
              <img id="wallImg" src={this.props.user.wall_image}/>
              <div id="prof">
                <div className="userImgDiv">
                  <img id="userAvatar" src={this.props.user.image}/>
                </div>
                <h1 id="name">{this.props.user.username}</h1>
              </div>

              <form id="imgIconContainer">
                <input className={upload} type="file" onChange={ this.updateFile }/>
              </form>
            </div>

            <div className="checkinsIdx">
                <div className="checkinList">
                  {this.props.user.checkins.map(checkin => <CheckinItem key={checkin.id} checkin={checkin} deleteCheckin={deleteCheckin} currentUser={currentUser} fetchAllCheckins={fetchAllCheckins} />)}
                  <h2 id="feed">Recent Activity</h2>
                </div>
              </div>


            <Route path={`/account`} component={updateFormContainer} />
          </div>

        </div>
      );
    }

}

export default UserProfile;

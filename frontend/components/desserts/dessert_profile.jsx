import React, { Component } from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
import CheckinFormContainer from '../checkins/checkin_form_container';
import CheckinIndexContainer from '../checkins/checkin_index_container';

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

    const starRating = `rating${dessert.avg_rating}`;

      return (
        <div className="dessertProfile">
          <div className="homeNav">

            <header className="navBar">
              <div className="homeLogo">
                <Link to="/home"><h1>DESSRT</h1></Link>
              </div>
              <ul id="homeNavLinks">
                <button id="logout" onClick={this.handleClick}>Logout</button>
                <Link to="/desserts" id="addDessert">Add Dessert</Link>
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
            <div id="dessert">
              <div className="dessertInfo">
                <div className="dessertHeader">
                  <div className="desImgDiv">
                    <img id="desAvatar" src={dessert.avatar_image} />
                  </div>
                  <div className="iconContainer">
                    <h1 id="dessertName">{dessert.name}</h1>
                    <div className="dessertIcons">
                      <p id={dessert.dessert_type}>{dessert.dessert_type}</p>
                      <p id={dessert.dessert_origin}>{dessert.dessert_origin}</p>
                    </div>
                  </div>
                  <div className='dessertStats'>
                  <div id="dessertStatsTable">
                    <span><div>Total {dessert.num_checkins}</div>
                    <div>Users {dessert.num_users}</div></span>
                    <span><div>Unique {dessert.num_unique_users}</div>
                    <div>Added {dessert.date_created}</div></span>
                  </div>
                    <span id={starRating}>Average Rating</span>
                  </div>
                </div>
                <div className="dessertHeaderBottom">
                  <p id="dessertDescription">{dessert.description}</p>
                  <Link to={`/desserts/${dessert.id}/checkin`} id="checkInLink">Checkin</Link>
                </div>
              </div>

              <div className="dessertImages">
                <img id="desProfilePic" src={dessert.image_url} />
                <img id="desProfilePic" src={dessert.image_url} />
                <img id="desProfilePic" src={dessert.image_url} />
                <img id="desProfilePic" src={dessert.image_url} />
                <img id="desProfilePic" src={dessert.image_url} />
              </div>
            </div>

            <CheckinIndexContainer />
            <Route path={'/desserts/:dessertId/checkin'} component={CheckinFormContainer} />
          </div>
      </div>
      );
    }

}

export default DessertProfile;

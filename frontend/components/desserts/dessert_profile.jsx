import React, { Component } from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
import CheckinFormContainer from '../checkins/checkin_form_container';
import CheckinIndexContainer from '../checkins/checkin_index_container';

class DessertProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avg_rating: null,
      num_checkins: null,
      num_users: null,
      num_unique_users: null
    }
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
          <div className="navBackground">
          <div className="homeNav">

            <header className="navBar">
              <div className="userProfileLogo">
                <Link to="/home"><h1 id="slogan1">DESSRT</h1></Link>
                <h5 id="slogan">EAT SOCIALLY</h5>
              </div>
              <ul id="homeNavLinks">
                <button id="logout" onClick={this.handleClick}>Logout</button>
                <Link to="/desserts" id="addDessert">Add Dessert</Link>
              </ul>
            </header>

            <div className="searchDrop">
              <div className="feedUserImgDiv">
                <img id="userFeedAvatar" src={this.props.currentUser.image}/>
              </div>
              <Link to={`/users/${this.props.currentUser.id}`} id="userLink">My Profile</Link>

            </div>
          </div>
          </div>

          <div className="dessertPage">
            <div id="dessert">
              <div className="dessertInfo">
                <div className="dessertHeader">
                  <div id="dessertHeaderLeft">
                  <div className="desImgDiv">
                    <img id="desAvatar" src={dessert.dessert_avatar} />
                  </div>
                  <div className="iconContainer">
                    <h1 id="dessertName">{dessert.name}</h1>
                    <div className="dessertIcons">
                      <p id={dessert.dessert_type}>{dessert.dessert_type}</p>
                      <p id={dessert.dessert_origin}>{dessert.dessert_origin}</p>
                    </div>
                  </div>
                </div>

                  <div className='dessertStats'>
                    <div id="dessertStatsTable">

                          <table className="dessertTable">
                            <tr>
                              <th id="left">Total</th>
                              <th id="right">Users</th>
                            </tr>
                            <tr>
                              <td id="left" className="topData">{dessert.num_checkins}</td>
                              <td id="right" className="topData">{dessert.num_users}</td>
                            </tr>
                            <tr>
                              <th id="left" className="bottom">Unique</th>
                              <th id="right" className="bottom">Added</th>
                            </tr>
                            <tr>
                              <td id="left" >{dessert.num_unique_users}</td>
                              <td id="right">{dessert.date_created}</td>
                            </tr>
                          </table>
                      </div>
                  </div>
                </div>
                <div className="dessertHeaderCenter">
                  <div id="statsBar">
                    <div id="bar">{dessert.name}</div>
                    <div id="bar">Type: {dessert.dessert_type}</div>
                    <div id={`${starRating}1`}></div>
                    <div id="ratingNum">{starRating.slice(6)}</div>
                    <div id="bar">From: {dessert.dessert_origin}</div>
                    <div id="barLast">{dessert.date_created}</div>
                  </div>
                </div>
                <div className="dessertHeaderBottom">
                  <p id="dessertDescription">{dessert.description}</p>
                  <Link to={`/desserts/${dessert.id}/checkin`} id="checkInLink"></Link>
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

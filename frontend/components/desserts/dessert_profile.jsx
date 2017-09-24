import React, { Component } from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
import CheckinFormContainer from '../checkins/checkin_form_container';
import CheckinIndexContainer from '../checkins/checkin_index_container';
import CheckinItem from '../checkins/checkinItem';
import NavContainer from '../nav/nav_container';

class DessertProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avg_rating: null,
      num_checkins: null,
      num_users: null,
      num_unique_users: null
    }

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

    const { dessert, deleteCheckin, currentUser, fetchAllCheckins } = this.props;
    if (!dessert) return null;

    const displayCheckins = (dessert.checkins.length <= 0) ? 'empty' : 'checkinList'
    const displayActivity = (dessert.checkins.length <= 0) ? 'No Recent Activity' : `${dessert.name} Recent Activity`

    const starRating = `rating${dessert.avg_rating}`;

      return (
        <div className="dessertProfile">

          <NavContainer />

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
                        <tbody>
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
                        </tbody>
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
                  <Link to={`/desserts/${dessert.id}/checkin`} id="checkInLink">Checkin</Link>
                </div>
              </div>
            </div>

            <div className="checkinsIdx">
                <div className={displayCheckins}>
                  {dessert.checkins.map(checkin => <CheckinItem key={checkin.id} checkin={checkin} deleteCheckin={deleteCheckin}  fetchAllCheckins={fetchAllCheckins} currentUser={this.props.currentUser} />)}
                  <h2 id="feed">{displayActivity}</h2>
                </div>
              </div>

            <Route path={'/desserts/:dessertId/checkin'} component={CheckinFormContainer} />
          </div>
        </div>
      );
    }

}

export default DessertProfile;

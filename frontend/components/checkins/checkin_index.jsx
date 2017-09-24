import React, { Component } from 'react';
import { Route, NavLink, Link } from 'react-router-dom';

import CheckinItem from './checkinItem'


class CheckinIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchAllCheckins();
  }

  render () {

    const { checkins, deleteCheckin, currentUser, fetchAllCheckins } = this.props

    const firstCheckins = checkins.slice(checkins.length - 10)

    return (
      <div className="checkinsIdx">
        <div className="checkinList">
          {firstCheckins.map(checkin => <CheckinItem key={checkin.id} checkin={checkin} deleteCheckin={deleteCheckin} currentUser={currentUser} fetchAllCheckins={fetchAllCheckins} />)}
          <h2 id="feed">Recent Activity</h2>
        </div>
      </div>

    );
  }
}

export default CheckinIndex;

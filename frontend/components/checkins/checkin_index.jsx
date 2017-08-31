import React, { Component } from 'react';
import { Route, NavLink, Link } from 'react-router-dom';

import CheckinItem from './checkinItem'


class CheckinIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  componentWillMount() {
    debugger
    this.props.fetchAllCheckins();
  }

  render () {
    debugger
    const { checkins, deleteCheckin, currentUser } = this.props

    return (
      <div>

          <div className="checkinsIdx">
              <div className="checkinList">
                {checkins.map(checkin => <CheckinItem key={checkin.id} checkin={checkin} deleteCheckin={deleteCheckin} currentUser={currentUser}/>)}
                <h2 id="feed">Checkin Feed Coming Soon!</h2>
              </div>
            </div>

      </div>

    );
  }

}

export default CheckinIndex;

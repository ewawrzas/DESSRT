import React, { Component } from 'react';
import { Route, NavLink, Link } from 'react-router-dom';

import CheckinItem from './checkinItem'


class CheckinIndex extends React.Component {
  constructor(props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllCheckins();
  }

  render () {
    const { checkins } = this.props

    return (
      <div>

          <div className="checkinsIdx">
              <div className="checkinList">
                <h2 id="feed">Recent Global Activity</h2>
                {checkins.map(checkin => <CheckinItem key={checkin.id} checkin={checkin} />)}
              </div>
            </div>

      </div>

    );
  }

}

export default CheckinIndex;

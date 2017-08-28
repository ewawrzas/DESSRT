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
    debugger
    return (
      <div>

          <div className="checkinsIdx">
            <h2 id="feed">All the Checkins</h2>
              <ul>
               {checkins.map(checkin => <CheckinItem key={checkin.id} checkin={checkin} />)}
             </ul>

          </div>

      </div>

    );
  }

}

export default CheckinIndex;

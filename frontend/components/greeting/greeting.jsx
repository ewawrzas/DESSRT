import React, { Component } from 'react';
import { Route, NavLink, Link } from 'react-router-dom';

import CheckinIndexContainer from '../checkins/checkin_index_container';
import NavContainer from '../nav/nav_container';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }


  render () {
    return (
      <div className="greeting">
        <NavContainer />
        <div className="homePage">
          <div className="homeContent">
            <p id="user">{this.props.currentUser.username}</p>
          </div>
          <CheckinIndexContainer />
        </div>
      </div>
    );
  }

}

export default Greeting;

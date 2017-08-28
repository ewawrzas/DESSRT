import React, { Component } from 'react';
import { Route, NavLink, Link } from 'react-router-dom';

// import DessertItem from './dessert_item'
// import DessertProfileContainer from './dessert_profile_container';
// import DessertFormContainer from './dessert_form_container';
// import UserProfileContainer from '../profile/user_profile_container';
// import DessertForm from './dessert_form';


class CheckinIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllCheckins();
  }

  render () {
    return (
      <div>

          <div className="checkinsIdx">
            <h2 id="feed">All the Checkins</h2>
              <ul>
               {this.props.checkins.map(checkin => <CheckinItem key={checkin.id} checkin={checkin} />)}
             </ul>
            <Route path ="/users/:userId" component={UserProfileContainer} />
            <Route path="/desserts/:dessertId" component={DessertProfileContainer} />
          </div>

      </div>

    );
  }

}

export default DessertIndex;

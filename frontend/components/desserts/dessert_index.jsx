import React, { Component } from 'react';
import { Route, NavLink, Link } from 'react-router-dom';

import DessertItem from './dessert_item'
import DessertProfileContainer from './dessert_profile_container';
import DessertFormContainer from './dessert_form_container';
import UserProfileContainer from '../profile/user_profile_container';
import DessertForm from './dessert_form';


class DessertIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick() {
    this.props.logout();
  }

  componentDidMount() {
    debugger
    this.props.fetchAllDesserts(search);
  }

  render () {
    debugger
    return (
      <div>

          <div className="dessertsHome">
            <h2 id="feed">All the Desserts</h2>
              <ul>
               {this.props.desserts.map(dessert => <DessertItem key={dessert.id} dessert={dessert} />)}
             </ul>
            <Route path ="/users/:userId" component={UserProfileContainer} />
            <Route path="/desserts/:dessertId" component={DessertProfileContainer} />
          </div>

      </div>

    );
  }

}

export default DessertIndex;

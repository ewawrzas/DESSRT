import React, { Component } from 'react';
import { Route, NavLink, Link } from 'react-router-dom';

import DessertItem from './dessert_item'
import DessertProfileContainer from './dessert_profile_container';
import DessertFormContainer from './dessert_form_container';
import UserProfileContainer from '../profile/user_profile_container';
import DessertForm from './dessert_form';
import NavContainer from '../nav/nav_container';

class DessertIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      search: ""
    }
  }

  handleChange(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault(e)
    this.props.fetchAllDesserts(this.state).then(
      () => this.setState({
      search: ""
      })
    ).then(search => this.props.history.push(`/search`));
    }


  componentDidMount() {
    this.props.fetchAllDesserts();
  }

  render () {

    return (
      <div>
        <NavContainer />

        <div className="searchResults">
          <div className="dessertIdx">
            <form onSubmit={ this.handleSubmit } className="searchContainer2">
              <input
                onChange={this.handleChange('search')}
                placeholder="Search"
                className="searchBar2"/>
              <button id="searchButton">Search</button>
            </form>
            <div className="dessertList">
              <p id='resultsTitle'>{this.props.desserts.length} results</p>
              <ul className="dessertItems">
               {this.props.desserts.map(dessert => <DessertItem key={dessert.id} dessert={dessert} />)}
             </ul>
             <div id="addNewMsg">
               <p>{'Don\'t see the dessert you\'re looking for ?'}</p>
               <Link to={`/desserts`} id="text1"><span>{'Add a new dessert here'}</span></Link>
             </div>
            <Route path ="/users/:userId" component={UserProfileContainer} />
            <Route path="/desserts/:dessertId" component={DessertProfileContainer} />
          </div>
        </div>
      </div>
    </div>

    );
  }

}

export default DessertIndex;

import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { merge }from 'lodash'

const DESSERT_TYPES = ['custard/pudding', "frozen", 'cake', 'cookie', 'pie', 'chocolate/candy', 'pastry', 'miscellaneous']
const DESSERT_ORIGINS = ["homemade", "store bought", "restaurant/cafe", "other"]

class DessertForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: "",
      dessert_type: "",
      dessert_origin: "",
      image_url: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  };



  handleChange(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const dessert = Object.assign({}, this.state)
    this.props.createDessert({dessert})
      .then(dessert => this.props.history.push(`/desserts/${dessert.id}`));
  }

  errors() {
   if (this.props.errors) {
     return (
       this.props.errors.map(error => {
         return (<li className="error" key={error}>{error}</li>);
       })
     );
   }
  }

  render() {
      return (

        <div>
          <div className="homeNav">
            <header className="navBar">
              <div className="homeLogo">
                <Link to="/home"><h1>DESSRT</h1></Link>
              </div>
              <ul id="homeNavLinks">
                <button id="logout" onClick={this.handleClick}>Logout</button>
              </ul>
            </header>
            <div className="searchDrop">
              <Link to={`/users/${this.props.currentUser.id}`} id="userLink">My Profile</Link>
              <div className="searchDiv">
                <h4>Search will go here</h4>
              </div>
            </div>
          </div>
          
          <div className="dessertsDiv">
          <div className="createDessert">
            <form onSubmit={ this.handleSubmit } className="createDessertForm" >

              <h2 id="addHeading">Add a New Dessert</h2>
              <h3 id="guidelinesHeading">Dessert Creation Guidelines</h3>
              <ul className="guidelines">
                <li>{`Please make your dessert name the proper case`}</li>
                <li>{`Give your homemade desserts an original name. Using a commercial name will cause confusion`}</li>
                <li>{`Please do not add non-dessert food items to DESSRT`}</li>
                <li>{`Please note that not following these guidelines may result in revoking your Dessert Creation privileges`}</li>
              </ul>

              <div className="createInputs">
                <label>DESSERT NAME</label>
                <div className="dessertNameInput">
                  <input
                    type="text"
                    id="nameChange"
                    onChange={ this.handleChange('name') }
                    value={ this.state.name }
                    />
                </div>

                <label>DESCRIPTION</label>
                <textarea
                  type="text"
                  id="descriptionChange"
                  onChange={ this.handleChange('description') }
                  value={ this.state.description }
                  />

                <label>IMAGE URL</label>
                <div className="dessertImageInput">
                  <input
                    type="url"
                    id="desImage"
                    onChange={ this.handleChange('image_url') }
                    value={ this.state.image_url }
                    />
                </div>

                <label>DESSERT TYPE</label>
                <select
                  id="typeSelect"
                  value={ this.state.dessert_type }
                  onChange={ this.handleChange('dessert_type') }
                  >
                  {DESSERT_TYPES.map((type, i) => {
                    return <option value={type} key={i}>{type}</option>;
                  })}
                </select>

                <label>ORIGIN</label>
                <select
                  id="originSelect"
                  value={ this.state.dessert_origin }
                  onChange={ this.handleChange('dessert_origin') }
                  >
                  {DESSERT_ORIGINS.map((origin, i) => {
                    return <option value={origin} key={i}>{origin}</option>;
                  })}
                </select>
              </div>

              <button id="createDessertBtn">Create Dessert</button>

            </form>
            </div>
          </div>
        </div>
      )
  }
}

export default withRouter(DessertForm)

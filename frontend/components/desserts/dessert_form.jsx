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

    const dessert = merge({}, this.state);
    this.props.createDessert(dessert).then(
      () => this.setState({
        name: "",
        description: "",
        dessert_type: "",
        dessert_origin: ""
      })
    );
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
        <div className="modal">
          <div className="updateUser">

            <form onSubmit={ this.handleSubmit } className="updateUserForm" >
              <p>Update Your Username and Password</p>

            <div className="updateInputs">
              <input
                type="text"
                id="nameChange"
                placeholder="Name"
                onChange={ this.handleChange('name') }
                value={ this.state.name }
                />

              <input
                type="text"
                id="descriptionChange"
                placeholder="Description"
                onChange={ this.handleChange('description') }
                value={ this.state.description }
                />

                <input
                  type="url"
                  id="desImage"
                  placeholder="Image Url"
                  onChange={ this.handleChange('image_url') }
                  value={ this.state.image_url }
                  />

              <select
                value={ this.state.dessert_type }
                onChange={ this.handleChange('dessert_type') }
                defaultValue="Select Dessert Type"
                >
                {DESSERT_TYPES.map((type, i) => {
                  return <option value={type} key={i}>{type}</option>;
                })}
              </select>

              <select
                value={ this.state.dessert_origin }
                onChange={ this.handleChange('dessert_origin') }
                defaultValue="Where did you get this dessert?"
                >
                {DESSERT_ORIGINS.map((origin, i) => {
                  return <option value={origin} key={i}>{origin}</option>;
                })}
              </select>

            </div>
              <button id="CreateDessertBtn">Create Dessert</button>
              <Link id="backBtn" to="/home">Go Back</Link>
            </form>
          </div>
        </div>
      )
  }
}

export default withRouter(DessertForm)

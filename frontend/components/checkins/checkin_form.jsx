import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { merge }from 'lodash'

class CheckinForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      raing: 5,
      comment: "",
      image_url: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleClick() {
    this.props.logout();
  }

  handleChange(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const checkin = Object.assign({}, this.state)
    this.props.createCheckin({checkin});
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

            <form onSubmit={ this.handleSubmit } className="createCheckinForm" >

              <h3 id="checkInHeading">Check-In</h3>

              <div className="createInputs">

                <label>WHAT DID YOU THINK</label>
                <textarea
                  type="text"
                  id="descriptionChange"
                  onChange={ this.handleChange('comment') }
                  value={ this.state.comment }
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

                <select
                  id="typeSelect"
                  value={ this.state.rating }
                  onChange={ this.handleChange('rating') }
                  >
                  {[1, 2, 3, 4, 5].map((type, i) => {
                    return <option value={type} key={i}>{type}</option>;
                  })}
                </select>


              </div>

              <button id="createDessertBtn">Confirm</button>

            </form>
          </div>

        </div>
      )
  }
}

export default withRouter(CheckinForm)

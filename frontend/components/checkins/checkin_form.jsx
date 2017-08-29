import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { merge }from 'lodash'

class CheckinForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: 0,
      comment: "",
      image_url: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.showRating = this.showRating.bind(this);
  };

  handleClick() {
    this.props.logout();
  }

  handleChange(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  // showRating(rating) {
  //   return (e) => this.setState({ [rating]: e.currentTarget.value });
  // }


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

              <div className="checkinInputs">


                <textarea
                  type="text"
                  id="commentText"
                  placeholder='What did you think?'
                  onChange={ this.handleChange('comment') }
                  value={ this.state.comment }
                  />


                <div className="checkinImageInput">
                  <input
                    type="url"
                    id="desImage"
                    onChange={ this.handleChange('image_url') }
                    value={ this.state.image_url }
                    />
                </div>

                <div className="ratingSlider">
                  <input
                    type="range"
                    max="5"
                    min="0"
                    id="rating"
                    value={ this.state.rating }
                    onChange={ this.handleChange('rating') }
                    />
                </div>




              <button id="confirmCheckinBtn">Confirm</button>
            </div>

            </form>
          </div>

        </div>
      )
  }
}

export default withRouter(CheckinForm)

import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { merge }from 'lodash'

class CheckinForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: 5,
      comment: "",
      image_url: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  };


  handleClick() {
    this.props.logout();
  }

  handleChange(field) {

    return (e) => this.setState({ [field]: e.currentTarget.value });
  }


  handleSubmit(e) {

    e.preventDefault();

    const checkin = merge({}, this.state, {
      dessert_id: this.props.match.params.dessertId
    })
    this.props.createCheckin({checkin}).then(
      () => this.setState({
        rating: 0,
        comment: "",
        image_url: "",
        dessert_id: ""
      })
    ).then(dessert => this.props.history.push(`/desserts/${this.props.match.params.dessertId}`)
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

            <form onSubmit={ this.handleSubmit } className="createCheckinForm" >
              <div id="checkInHeading">
                <h3 >Check-In</h3>
                <Link id="checkInExit" to="/home">X</Link>
              </div>
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

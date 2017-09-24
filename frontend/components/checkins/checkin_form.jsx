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


  handleSubmit(e) {
    e.preventDefault();
    const checkin = merge({}, this.state, {
      dessert_id: this.props.match.params.dessertId
    })
    this.props.createCheckin({checkin}).then(
      () => this.setState({
        rating: 0,
        comment: "",
        image: "",
        dessert_id: ""
      })
    ).then(dessert => this.props.history.push(`/desserts/${this.props.match.params.dessertId}`)), () => this.props.fetchAllCheckins();
  }


    handleClick() {
      this.props.logout();
    }

    handleChange(field) {
      return (e) => this.setState({ [field]: e.currentTarget.value });
    }

    renderErrors() {
      if (!this.props.errors){
         return null;
      } else {
        return(
          <div className="errList">
            {this.props.errors.map((error, i) => (
              <p id="errors" key={`error-${i}`}>
                {error}
              </p>
            ))}
          </div>
        );
      }
    };

  render() {

    const { rating } = this.state

      return (

        <div id="id01" className="modal">

          <div className="updateUser">
            <form onSubmit={ this.handleSubmit } className="createCheckinForm" >

              <div id="checkInHeading">
                <h3 >Check-In</h3>
                <Link id="checkInExit" to={`/desserts/${this.props.match.params.dessertId}`}>X</Link>
              </div>

              <div className="checkinErrDiv">
                { this.renderErrors() }
              </div>

              <div className="checkinInputs">

                <textarea
                  type="text"
                  id="commentText"
                  placeholder='What did you think?'
                  onChange={ this.handleChange('comment') }
                  value={ this.state.comment }
                  />

                <div className="ratingSlider">
                  <input
                    type="range"
                    max="5"
                    min="0"
                    id="rating"
                    value={ this.state.rating }
                    onChange={ this.handleChange('rating') }
                    />
                  <div>Rating: {rating}</div>
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

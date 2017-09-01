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
      image_url: "",
      imageFile: null,
      imageUrl: null
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.updateFile = this.updateFile.bind(this);
  };

  updateFile (e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = function () {
      this.setState({ imageFile: file, imageUrl: fileReader.result });
    }.bind(this);

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    const dessert_id = this.props.match.params.dessertId;
    formData.append("checkin[comment]", this.state.comment);
    formData.append("checkin[dessert_id]", dessert_id);
    formData.append("checkin[image]", this.state.imageFile);
    formData.append("checkin[rating]", this.state.rating);

    this.props.createCheckin(formData).then(
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

        <div onClick={ this.handleModal } id="id01" className="modal">

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


                <div className="checkinIconContainer">
                <input
                  className="checkinInputFile"
                  type="file"
                  onChange={ this.updateFile }
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

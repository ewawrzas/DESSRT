import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { merge }from 'lodash';
import NavContainer from '../nav/nav_container'

class UpdateForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      imageFile: null,
      imageUrl: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
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


  handleChange(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("user[username]", this.state.username);
    formData.append("user[image]", this.state.imageFile);

    this.props.updateUser(formData).then(
      () => this.setState({
        username: "",
        imageFile: ""
      })
    ).then(user => this.props.history.push(`/users/${this.props.currentUser.id}`)
    );
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

    const { user } = this.props

      return (
        <div>

          <NavContainer />

          <div className="userAccountDiv">
            <form onSubmit={ this.handleSubmit } className="updateForm" >
              <p id="updateTitle">Profile Settings</p>
              <div className="updateFormContent">

                <div id="avatarUpdate">
                  <span id="avatarTitle">Profile Picture
                    <div className="imgDiv">
                      <img id="avatar" src={this.props.currentUser.image} />
                    </div>
                  </span>
                  <input className="inputFile"
                    type="file"
                    onChange={ this.updateFile }
                    />
                </div>

                <div className="updateInputs">
                  <span className="updateLabel">Username
                    <input
                      type="text"
                      id="usernameChange"
                      onChange={ this.handleChange('username') }
                      value={ this.state.username }
                      />
                  </span>
                </div>

                <div className="userErrDiv">{ this.renderErrors() }</div>
                <button id="updateUserBtn">Update Settings</button>

              </div>
            </form>
          </div>

        </div>
      )
  }
}

export default withRouter(UpdateForm)

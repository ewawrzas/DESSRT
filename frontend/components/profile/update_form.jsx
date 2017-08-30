import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { merge }from 'lodash'

class UpdateForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      imageFile: null,
      imageUrl: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this)
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.userId !== nextProps.match.params.userId) {
      this.props.fetchSingleUser(nextProps.match.params.userId);
    }
  }

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
    debugger
    e.preventDefault();
    const formData = new FormData();
    formData.append("user[username]", this.state.username);
    formData.append("user[password]", this.state.password);
    formData.append("user[image]", this.state.imageFile);
    debugger
    // const user = merge({}, this.state);
    this.props.updateUser(formData).then(
      () => this.setState({
        username: "",
        password: "",
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
        <div className="dessertsDiv">
          <div className="createDessert">

            <form onSubmit={ this.handleSubmit } className="createDessertForm" >
              <p id="updateTitle">Update Your Username and Password</p>

              <div className="updateInputs">
                <div className="inputPad1">
                  <input
                    type="text"
                    id="usernameChange"
                    onChange={ this.handleChange('username') }
                    value={ this.state.username }
                    />
                </div>
                <div className="inputPad2">
                  <input
                    type="password"
                    id="passwordChange"
                    onChange={ this.handleChange('password') }
                    value={ this.state.password }
                    />
                </div>
                <input type="file" onChange={ this.updateFile }/>
                <img id="avatar" src={this.state.imageUrl} />
              </div>
              <div className="errDiv">
                { this.renderErrors() }
              </div>
              <button id="updateUserBtn">Submit</button>
              <Link id="backBtn" to="/home">Go Back</Link>
            </form>

          </div>
        </div>
      )
  }
}

export default withRouter(UpdateForm)

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { merge }from 'lodash';


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
    e.preventDefault();
    debugger
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
    const link = (this.props.location.pathname === `/users/${this.props.currentUser.id}`) ? <Link to={`/users/${this.props.user.id}/update`}id="updateLink" >Update</Link> :
    <Link to={`/users/${this.props.currentUser.id}`} id="userLink">My Profile</Link>
    const { user } = this.props

      return (
        <div>
        <div className="homeNav">
          <header className="navBar">
            <div className="userProfileLogo">
              <Link to="/home"><h1>DESSRT</h1></Link>
            </div>
            <ul id="homeNavLinks">
              <button id="logout" onClick={this.handleClick}>Logout</button>
              <Link to="/desserts" id="addDessert">Add Dessert</Link>
            </ul>
          </header>
          <div className="searchDrop">
              {link}
            <div className="searchDiv">
              <h4>Search will go here</h4>
            </div>
          </div>
        </div>

        <div className="dessertsDiv">
          <div className="updateDiv">

            <form onSubmit={ this.handleSubmit } className="updateForm" >
              <p id="updateTitle">Profile Settings</p>
              <div className="updateFormContent">
                <div id="avatarUpdate">
                  <span id="avatarTitle">Profile Picture
                  <img id="avatar" src={this.state.imageUrl} /></span>
                  <input className="inputFile" type="file" onChange={ this.updateFile }/>
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

                    <span className="updateLabel">Password
                      <input
                        type="password"
                        id="pwChange"
                        onChange={ this.handleChange('password') }
                        value={ this.state.password }
                        />
                    </span>
                </div>
                <div className="errDiv">
                  { this.renderErrors() }
                </div>
                <button id="updateUserBtn">Update Settings</button>

                </div>
            </form>

          </div>
        </div>
        </div>
      )
  }
}

export default withRouter(UpdateForm)

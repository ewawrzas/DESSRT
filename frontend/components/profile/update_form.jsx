import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { merge }from 'lodash'

class UpdateForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.userId !== nextProps.match.params.userId) {
      this.props.fetchSingleUser(nextProps.match.params.userId);
    }
  }

  handleChange(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const user = merge({}, this.state);
    this.props.updateUser(user).then(
      () => this.setState({
        username: "",
        password: ""
      })
    );
  }

  render() {

      return (
        <div className="modal">
          <div className="updateUser">

            <form onSubmit={ this.handleSubmit } className="updateUserForm" >
              <p>Update Your Username and Password</p>

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

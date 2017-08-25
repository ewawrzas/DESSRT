import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { merge }from 'lodash'

class UpdateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateUser(this.state)
      .then(data => this.props.history.push(`/users/${data.user.id}`));
  }

  handleChange(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  render() {

    const modal = (this.props.location.pathname === "/users/:userId/update") ? "active" : "inactive"

    return (
      <div className={ modal }>
        <div className="updateUser">
          <form className="updateUserForm" onSubmit={this.handleSubmit}>
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
          </form>
        </div>
      </div>
    )
  }
}

export default withRouter(UpdateForm)

import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class UpdateForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.props);
    this.props.updateUser(user);
  }

  handleChange(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    debugger
    const modal = (this.props.location.pathname === "/home/update") ? "active" : "inactive"

    return (
      <div className={ modal }>
        <div className="updateUser">
          <form onSubmit={this.handleSubmit} className="updateUserForm">
            <p>Update Your Username and Password</p>
            <div className="updateInputs">
              <div className="inputPad1">
                <input
                  type="text"
                  id="usernameChange"
                  onChange={ this.handleChange('username') }
                  value={ this.props.username }
                  />
              </div>
              <div className="inputPad2">
                <input
                  type="password"
                  id="passwordChange"
                  onChange={ this.handleChange('password') }
                  value={ this.props.password }
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

export default UpdateForm

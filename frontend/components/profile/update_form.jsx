import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class UpdateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.update(user);
    this.setState({username:"", password:""})
  }

  handleChange(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    return (
      <div className="updateUser">
        <form className="updateUserForm">
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
    )
  }
}

export default withRouter(UpdateForm)

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
  };

  handleChange(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    debugger
    const user = merge({}, this.state);
    this.props.updateUser(user).then(
      () => this.setState({
        username: "",
        password: ""
      })
    );
  }

  render() {
debugger
    return (
      <div className="modal">
        <div className="updateUser">

          <form onSubmit={ this.handleSubmit } className="updateUserForm">
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

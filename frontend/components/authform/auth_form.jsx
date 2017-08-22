import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class AuthForm extends React.Component {
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
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
    this.setState({username:"", password:"", email:""})
  }

  handleChange(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  renderErrors() {
    if (!this.props.errors){
       return null;
    } else {
      return(
        <ul>
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    }
  };


  render() {
    const link = (this.props.location.pathname === "/login") ? <Link to="/signup">Sign up!</Link> : <Link to="/login">Signin</Link>;

    const emailInput = (
      <div>
        <label htmlFor="email">Email</label>
        <input
        type="text"
        id="email"
        onChange={ this.handleChange('email') }
        value={ this.state.email }
        />
      </div>
    );

    const revealEmail = (this.props.location.pathname === "/login") ? "" : emailInput

    return (
      <div>
        <h1>{this.props.formType}</h1>
        <br/>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            onChange={ this.handleChange('username') }
            value={ this.state.username }
            />
          <br/>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={ this.handleChange('password') }
            value={ this.state.password }
            />
          <br/>
          { revealEmail }
          { this.renderErrors() }
          <button>{ this.props.buttonText }</button>
          <br/>
          {link}

        </form>
      </div>
    );
  }

}

export default withRouter(AuthForm);

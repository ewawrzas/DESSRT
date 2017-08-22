import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
    this.setState({username:"", password:""})
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


    return (
      <div className='authFormParent'>
        <br/>
        <div className="authInfo">
          <span className="formType">
            <h1>{this.props.formType}</h1>
          </span>
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
            { this.renderErrors() }
            <button>{ this.props.buttonText }</button>
            <br/>
            {link}
          </form>
        </div>
      </div>
    );
  }

}

export default withRouter(AuthForm);

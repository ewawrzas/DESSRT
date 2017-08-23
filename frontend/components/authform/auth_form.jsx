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
        <ul className="errList">
          {this.props.errors.map((error, i) => (
            <li id="errors" key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    }
  };


  render() {
    const link = (this.props.location.pathname === "/login") ? <Link onClick={ this.props.removeErrors } to="/signup">Sign up!</Link> : <Link onClick={ this.props.removeErrors }to="/login">{"Sign In"}</Link>;

    const userMsg = (this.props.location.pathname === "/login") ? "New around here?" : "Already have an account?";

    const formName = (this.props.location.pathname === "/login") ? "Sign In" : "Sign Up";


    return (
      <div className='dessertContainer'>
        <br/>
        <div className="authInfo">
          <form onSubmit={this.handleSubmit}>
            <h1>DESSRT</h1>
            <h4>EAT SOCIALLY</h4>
            <h2>{formName}</h2>

            <div className="username">
              <input
                type="text"
                id="username"
                onChange={ this.handleChange('username') }
                value={ this.state.username }
                />
              </div>

            <div className="password">
              <input
                type="password"
                id="password"
                onChange={ this.handleChange('password') }
                value={ this.state.password }
                />
            </div>
            <div className="errDiv">
              { this.renderErrors() }
            </div>
            <span>
              <button id="signIn">{ formName }</button>
            </span>
            <br/>
            {userMsg}
            {link}
          </form>
        </div>
      </div>
    );
  }

}

export default withRouter(AuthForm);

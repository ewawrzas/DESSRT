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
      <div className='dessertContainer'>
        <br/>
        <div className="authInfo">
          <form onSubmit={this.handleSubmit}>
            <div className="username">
              <input
                type="text"
                id="username"
                onChange={ this.handleChange('username') }
                value={ this.state.username }
                />
              </div>
            <br/>
            <div className="password">
              <input
                type="password"
                id="password"
                onChange={ this.handleChange('password') }
                value={ this.state.password }
                />
            </div>
            <br/>
            { this.renderErrors() }
            <span>
              <button id="signIn">{ (this.props.buttonText) }</button>
            </span>
            <br/>
            {link}
          </form>
        </div>
      </div>
    );
  }

}

export default withRouter(AuthForm);

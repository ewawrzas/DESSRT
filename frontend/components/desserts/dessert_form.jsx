import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { merge }from 'lodash'

const DESSERT_TYPES = ["What is the dessert type?", 'custard', "frozen", 'cake', 'cookie', 'pie', 'chocolate', 'pastry', 'candy', 'miscellaneous']
const DESSERT_ORIGINS = ["Where did the dessert come from?", "homemade", "store", "cafe", 'restaurant', "other"]

class DessertForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: "",
      dessert_type: "",
      dessert_origin: "",
      image_url: "",
      imageFile: null,
      imageUrl: null
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
  };

  handleClick() {
    this.props.logout();
  }

  handleChange(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
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

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("dessert[name]", this.state.name);
    formData.append("dessert[description]", this.state.description);
    formData.append("dessert[dessert_type]", this.state.dessert_type);
    formData.append("dessert[dessert_origin]", this.state.dessert_origin);
    formData.append("dessert[avatar_image]", this.state.imageFile);

    this.props.createDessert(formData)
      .then(dessert => this.props.history.push(`/desserts/${dessert.id}`));
  }

  renderErrors() {
   if (!this.props.errors) {
     return null
   } else {
     return (
       this.props.errors.map(error => {
         return (<li className="error" key={error}>{error}</li>);
       })
     );
   }
}


  render() {
      return (

        <div>

          <div className="navBackground">
            <div className="homeNav">
              <header className="navBar">
                <div className="userProfileLogo">
                  <Link to="/home"><h1 id="slogan1">DESSRT</h1></Link>
                  <h5 id="slogan">EAT SOCIALLY</h5>
                </div>
                <ul id="homeNavLinks">
                  <button id="logout" onClick={this.handleClick}>Logout</button>
                </ul>
              </header>
              <div className="searchDrop">
                <div className="feedUserImgDiv">
                  <img id="userFeedAvatar" src={this.props.currentUser.image}/>
                </div>
                <Link to={`/users/${this.props.currentUser.id}`} id="userLink">My Profile</Link>
              </div>
            </div>
          </div>

          <div className="dessertsDiv">
            <div className="createDessert">
              <form onSubmit={ this.handleSubmit } className="createDessertForm" >

                <h2 id="addHeading">Add a New Dessert</h2>
                <h3 id="guidelinesHeading">Dessert Creation Guidelines</h3>
                <ul className="guidelines">
                  <li>{`Please make your dessert name the proper case`}</li>
                  <li>{`Give your homemade desserts an original name. Using a commercial name will cause confusion`}</li>
                  <li>{`Please do not add non-dessert food items to DESSRT`}</li>
                  <li>{`Please note that not following these guidelines may result in revoking your Dessert Creation privileges`}</li>
                </ul>

                <div className="createInputs">
                  <label className="addLabel">DESSERT NAME</label>
                  <div className="dessertNameInput">
                    <input
                      type="text"
                      id="nameChange"
                      onChange={ this.handleChange('name') }
                      value={ this.state.name }
                      />
                  </div>

                  <label className="addLabel">DESCRIPTION</label>
                  <textarea
                    type="text"
                    id="descriptionChange"
                    onChange={ this.handleChange('description') }
                    value={ this.state.description }
                    />

                  <select
                    id="typeSelect"
                    value={ this.state.dessert_type }
                    onChange={ this.handleChange('dessert_type') }
                    >
                    {DESSERT_TYPES.map((type, i) => {
                      return <option value={type} key={i}>{type}</option>;
                    })}
                  </select>


                  <select
                    id="originSelect"
                    value={ this.state.dessert_origin }
                    onChange={ this.handleChange('dessert_origin') }
                    >
                    {DESSERT_ORIGINS.map((origin, i) => {
                      return <option value={origin} key={i}>{origin}</option>;
                    })}
                  </select>



                  <div id="desAvatarUpdate">
                    <input className="desInputFile" type="file" onChange={ this.updateFile }/>
                  </div>
                </div>

                <div className="errorDiv">
                  { this.renderErrors() }
                </div>

                <button id="createDessertBtn">Create Dessert</button>

            </form>
            </div>
          </div>
        </div>
      )
  }
}

export default withRouter(DessertForm)

import React, { Component } from 'react';
import './App.css';
import FacebookLogin from 'react-facebook-login'

import {connect} from 'react-redux'
import {setFaceBookToken, setTwitterUsername} from './actions/action'


@connect((store) => {
  return {
    fbkey: store.fbkey,
    twittername: store.twittername
  }
})
export class App extends Component {
  constructor() { 
  super()

    this.state = {
      twittername: ''
    }

  }
  render() {
    const responseFacebook = (response) => {
      console.log(response);
      this.props.dispatch(setFaceBookToken(response.accessToken))
    }

    const handleSubmit = (e) => {
      this.props.dispatch(setTwitterUsername(e.target.value))
    }

    return (
      <div className="App">
         
         <div className="login">

           <br />
           <br />

            <h1 className="repressed-title">Personality Insights by:</h1>
            <h3 className="repressed-title">@kylecrfahey</h3>


            <br /> 
            <br /> 
            <br />
            <br />


            <div className="inline-icons">
              <FacebookLogin
                  appId="1345711915541627"
                  autoLoad={true}
                  fields="name,email,picture"
                  scope="user_posts,public_profile"
                  callback={responseFacebook}
                />
              <i className="fa fa-check" aria-hidden="true"></i>
            </div>
              

            <div className="inline">
              <span>
                <div className="form-container">
                  <input className="form-text" type="text" name="twitter" placeholder="Twitter Username" onChange={handleSubmit} pattern="^[A-Za-z0-9_]{1,32}$" required/>
                </div>
                </span>
                <i className="fa fa-check twitter" aria-hidden="true"></i>
            </div>

                <div>

                  <button className="start-button">Start The Adventure</button> 
                  <i className="fa fa-arrow-left" aria-hidden="true"></i>
                </div>
              </div>


          
      </div>
    );
  }
}



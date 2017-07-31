import React, { Component } from 'react';
import './App.css';
import TiSocialFacebookCircular from 'react-icons/lib/ti/social-facebook-circular';
import FacebookLogin from 'react-facebook-login'

import { connect } from 'react-redux'
import {setFaceBookToken, setTwitterUsername} from './actions/action'


@connect((store) => {
  return {
    fbkey: store.fbkey,
    twittername: store.twittername
  }
})
export class App extends Component {
 
  render() {
    const responseFacebook = (response) => {
      console.log(response);
      this.props.dispatch(setFaceBookToken(response.accessToken))
    }

    const handleSubmit = () => {
      console.log(this.props.value)
      this.props.dispatch(setTwitterUsername(this.props.value))
    }

    return (
      <div className="App">
         <FacebookLogin
            appId="1345711915541627"
            autoLoad={true}
            fields="name,email,picture"
            scope="user_posts,public_profile"
            callback={responseFacebook}
            icon={<TiSocialFacebookCircular />}
          />

          <form onSubmit={this.handleSubmit}>
        <label>
          Twitter Username
          <input type="text" value={this.props.value}  />
           </label>
            <input type="submit" value="Submit" />
          </form>
   

      </div>
    );
  }
}



import React, { Component } from 'react';
import './App.css';
import FacebookLogin from 'react-facebook-login'

import {connect} from 'react-redux'
import {setFaceBookToken, setTwitterUsername} from './actions/action'


@connect((store) => {
  console.log('store',store)
  return {
    fbkey: store.reducer.fbkey,
    twittername: store.reducer.twittername
  }
})
export class App extends Component {
  componentDidMount() {
    document.querySelector('.start-button').disabled = true;
  }


  render() {
    const responseFacebook = (response) => {
      console.log(response);
      let facebook = document.querySelector('.facebook')
      facebook.style.display = 'inline'
      this.props.dispatch(setFaceBookToken(response.accessToken))
    }

    const handleSubmit = (e) => {
      let arrow =  document.querySelector('.next')
      let twitter = document.querySelector('.twitter')
      
      if (e.target.checkValidity()) {
      document.querySelector('.start-button').disabled = false;
      twitter.style.display = 'inline'
      this.props.dispatch(setTwitterUsername(e.target.value))
      //console.log(store.getState())
      document.querySelector('.start-button').disabled = false;
      document.querySelector('.next').style.display = "inline"
    } else {

        arrow.style.display = 'none'
        twitter.style.display = 'none'
        document.querySelector('.start-button').disabled = true;
      }
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
              <i className="fa fa-check facebook" aria-hidden="true"></i>
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
                  <button className="start-button" disabled>Start The Adventure</button> 
                  <i className="fa fa-arrow-left next" aria-hidden="true"></i>
                </div>
              </div>  
        </div>
    );
  }
}



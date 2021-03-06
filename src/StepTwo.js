import React, { Component } from 'react';
import './App.css';
import FacebookLogin from 'react-facebook-login'

import {connect} from 'react-redux'
import Loader from 'react-loader-advanced'
import {setFaceBookToken, setTwitterUsername, startTheMachine} from './actions/action'


@connect((store) => {
  console.log('store',store)
  return {
    fbkey: store.reducer.fbkey,
    twittername: store.reducer.twittername,
    loading: store.reducer.loading
  }
})
export class StepTwo extends Component {
  constructor() {
    super() 

    this.start = this.start.bind(this);


  }  

  componentDidMount() {
    console.log(this.props.location.pathname)
  }
  

  start() {
    this.props.dispatch(startTheMachine())
  }


  render() {
    const responseFacebook = (response) => {
      console.log(response);
      let facebook = document.querySelector('.facebook')
      facebook.style.display = 'inline'
      this.props.dispatch(setFaceBookToken(response))
    }

    const handleSubmit = (e) => {
      let arrow =  document.querySelector('.next')
      let twitter = document.querySelector('.twitter')
      
      if (e.target.checkValidity()) {

        twitter.style.display = 'inline'
        this.props.dispatch(setTwitterUsername(e.target.value))

        document.querySelector('.next').style.display = "inline"
    } else {

        arrow.style.display = 'none'
        twitter.style.display = 'none'

      }
    }


    let compare = '/login/comparar'
    compare = this.props.location.pathname === compare ? true : false

    const buttonText = compare ? 'CONTINUE' : 'START THE ADVENTURE'

    return (
      <div className="App">
        <Loader show={this.props.loading} message={'loading'}>
         
         <div className="login">

           {compare ? (
             <h3>First Person</h3>
            ) : (
             <h3>Login</h3>
            )}

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
                  <button onClick={this.start}  className="start-button" >{buttonText}</button> 
                  <i className="fa fa-arrow-left next" aria-hidden="true"></i>
                </div>
              </div>  
              </Loader>
        </div>
    );
  }
}



import React, { Component } from 'react';
import './App.css';


import {connect} from 'react-redux'

import {} from './actions/action'


@connect((store) => {
  return {
    
  }
})
export class Home extends Component {
  render() {
    return (
      <div className="App">
        <div className='selection'>
          <h1>Would you like to compare your personality with a friend?</h1>
          <div className='buttonFlex'>
            <button>Compare</button>
            <button>Don't Compare</button>
          </div>
        </div>
      </div>
    );
  }
}



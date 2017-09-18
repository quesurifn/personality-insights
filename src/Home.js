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
          <h1 className="repressed-title">Personality Insights</h1>
          <h3>Would you like to compare your personality with a friend?</h3>
          <div className='buttonFlex'>
            <button onClick={() => this.props.history.push('/login/comparar')}>Compare</button>
            <button onClick={() => this.props.history.push('/login/nocompares')}>Don't Compare</button>
          </div>
          <div className='modest-credit'>
            <small>@kylecrfahey</small>
          </div>
        </div>
        
      </div>
    );
  }
}



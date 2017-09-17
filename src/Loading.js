import React, { Component } from 'react';
import './App.css';

import {connect} from 'react-redux'
import Loader from 'react-trope-loader'


@connect((store) => {
  return {
    loading: store.reducer.loading
  }
})
export class Loading extends Component {

  

  componentDidUpdate() {
    if (this.props.loading === false) {
      this.props.history.push('/results')
    }
  }
  
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}



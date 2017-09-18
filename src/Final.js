import React, { Component } from 'react';
import './App.css';

import {connect} from 'react-redux'

import Radar from 'react-d3-radar';


@connect((store) => {
  return {
    response: store.reducer.response
  }
})
export class Final extends Component {
  
  render() {
    const needsPercent ={};
    const needsVar = this.props.response.data.needs.map(e => {
      return {
        "key": e.name,
        "label": e.name
      }
    })

    this.props.response.data.needs.forEach(e => {
      needsPercent[e.name] = e.percentile
    })
    
    return (
      <div className="App">
        

        <div className='Needs'>
        <h2>Needs</h2>
          
          <Radar
            width={500}
            height={500}
            padding={70}
            domainMax={0.9}
            highlighted={null}
            data={{
              variables: needsVar,
              sets: [
                {
                  key: 'me',
                  label: 'My Scores',
                  values: needsPercent,
                },
              ],
            }}
          />
        </div> 


      </div>
    );
  }
}



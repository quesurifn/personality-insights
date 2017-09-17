import React from 'react';
import { Route, Switch } from 'react-router-dom'
import {Home} from './Home'

import {Loading} from './Loading'
import {Final} from './Final'


export const App = () => (
  <div>
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/loading" component={Loading} />
        <Route exact path="/results" component={Final} /> 
        <Route path='*' component={Home} />
      </Switch>
    </main>
  </div>
)
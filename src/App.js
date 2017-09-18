import React from 'react';
import { Route, Switch } from 'react-router-dom'
import {Home} from './Home'

import {Loading} from './Loading'
import {Final} from './Final'
import {StepTwo} from './StepTwo'


export const App = () => (
  <div>
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={StepTwo} />
        <Route exact path="/results" component={Final} /> 
        <Route path='*' component={Home} />
      </Switch>
    </main>
  </div>
)
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignUp from './SignUp';



const Main = () => (
  <main>
    <Switch>
    <Route exact path='/SignUp' component={SignUp} />
     

    </Switch>
  </main>
)

export default Main;

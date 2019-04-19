import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './Landing';
import SignUp from './SignUp';
import SignIn from './SignIn';
import AddToInventory from './AddToInventory';

const Main = () => (
  <main>
    <Switch>
    <Route exact path='/' component={Landing} />
    <Route exact path='/SignUp' component={SignUp} />
    <Route exact path='/SignIn' component={SignIn} />
    <Route exact path='/AddToInventory' component={AddToInventory} />

    </Switch>
  </main>
)

export default Main;

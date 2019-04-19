import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './customer/About';
import Home from './employee/Home';
import Locations from './customer/Locations';
import { default as MenuCustomer } from './customer/Menu';
import { default as MenuEmployee } from './employee/Menu';
import SignUp from './SignUp';
//import Test from './customer/Test';


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Test} />
      <Route exact path='/SignUp' component={SignUp} />
      // <Route exact path='/about' component={About} />
      // <Route exact path='/employee' component={Home} />
      // <Route exact path='/locations' component={Locations} />
      // <Route exact path='/menu' component={MenuCustomer} />
      // <Route exact path='/employee/menu' component={MenuEmployee} />
      // <Route exact path='/order' component={Order} />
    </Switch>
  </main>
)

export default Main;

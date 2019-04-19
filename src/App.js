import React from 'react';
import './App.css';
import Main from './components/Main';
import { default as NavBar } from './components/NavBar';
import { default as footer } from './components/Footer';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import SignIn from './components/SignIn.js';
import SignUp from './components/SignUp.js';
import AddToInventory from './components/AddToInventory';

/*const navbar = window.location.pathname.includes("/employee") ? <NavBar /> : <NavBar />;*/
const navbar = <NavBar />

const App = () => (
  <div>
    {navbar}
    <Main /> 
    {footer}
    <Route path='/SignIn' component={SignIn} />
    <Route path='/SignUp' component={SignUp} />
    <Route path='/AddToInventory' component={AddToInventory} />
  </div>
)

export default App;
import React from 'react';
import './App.css';
import Main from './components/Main';
import { default as NavBar } from './components/NavBar';
import { default as footer } from './components/Footer';
import firebase from './firebase-config';


/*const navbar = window.location.pathname.includes("/employee") ? <NavBar /> : <NavBar />;*/
const db = firebase.firestore();
const navbar = <NavBar />

const App = () => (
  <div>
    {navbar}
    <Main /> 
    {footer}
  </div>
)

export default App;
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
export default class Landing extends Component { 
  render () {                                   
      return (
        <div>
            <h1> Welcome to Chasing Zero </h1>
            <p> To Be Completed: Display Notifications Here</p>
            <Link to='/SignUp'>Sign Up</Link>
        </div>
      )
   }
}
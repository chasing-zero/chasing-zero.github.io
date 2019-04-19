import React, { Component } from 'react';
export default class SignIn extends Component { 
  state = { 
  }
  render () {                                   
      return (
        <div>
             <div id='signinContainer'>
                  <form id='form'>       
                      <input className='input' type="text"  
                       placeholder="Email"/>          
                      <input className='input' type="password" 
                       placeholder="Password"/>
                      <button id='submit'>Login</button>
                  </form>
             </div>
        </div>
      )
   }
}
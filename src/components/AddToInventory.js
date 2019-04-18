import React, { Component } from 'react';
export default class AddToInventory extends Component { 
  state = { 
  }
  render () {                                   
      return (
        <div>
             <div id='signinContainer'>
                  <form id='form'>     
                  {/*Needs to be better adapted for adding food items*/  }
                      <input className='input' type="text"  
                       placeholder="Food Name"/>          
                      <input className='input' type="text" 
                       placeholder="Quantity"/>
                       <input className='input' type="text" 
                       placeholder="Expiration Date"/>
                      <button id='submit'>Add To Inventory</button>
                  </form>
             </div>
        </div>
      )
   }
}
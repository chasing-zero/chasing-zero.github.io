import React, { Component } from 'react';
export default class ManageInventory extends Component { 
  state = { 
  }
  render () {                                   
      return (
        <div>
            <p> Add Items to your Inventory Here </p>
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
             <h1> Your Pantry </h1>
             <p> Your Inventory will be displayed here, with the option to remove items as needed </p>
        </div>
      )
   }
}
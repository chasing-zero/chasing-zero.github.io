import React, {Component} from 'react';
import {Link } from 'react-router-dom';
import 'typeface-roboto';

class Navbar extends Component {
  render(){
    return (
      <div className="NavClass">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li> 
            <Link to="/SignUp">Sign Up</Link>
          </li>
          <li>
            <Link to="/SignIn">Sign In</Link>
          </li>
          <li>
            <Link to="/ManageInventory">Manage Inventory</Link>
          </li>
          <li>
            <Link to="/ShoppingListBuilder">Shopping List Builder</Link>
          </li>
          <li>
            <Link to="/ViewRecipes">View Recipes Based on Your Inventory</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Navbar;
import React, {Component} from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import SignIn from './SignIn.js';
import SignUp from './SignUp.js';
import AddToInventory from './AddToInventory';

class Navbar extends Component {
  render(){
    return (
      <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/SignIn">Sign In</Link>
              </li>
              <li>
                <Link to="/SignUp">Sign Up</Link>
              </li>
              <li>
                <Link to="/AddToInventory">Add To Inventory</Link>
              </li>
            </ul>
            <Route path='/SignIn' component={SignIn} />
            <Route path='/SignUp' component={SignUp} />
            <Route path='/AddToInventory' component={AddToInventory} />
          </div>
      </Router>
      
    )
  }
}

export default Navbar;
import React, {Component} from 'react';

class Navbar extends Component {
  render(){
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary navbar-fixed-top">
        <a className="navbar-brand" href="/">
          Chasing Zero
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/SignUp">Sign Up</a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/SignIn">Sign In </a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/ManageInventory">Manage Your Inventory </a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/ShoppingListBuilder">Shopping List Builder </a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/ViewRecipes">View Recipes based on your Inventory </a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar;
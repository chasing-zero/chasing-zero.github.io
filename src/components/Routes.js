import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Landing from './Landing';
import SignUp from './SignUp';
import SignIn from './SignIn';
import ManageInventory from './ManageInventory';
import ShoppingListBuilder from './ShoppingListBuilder';
import ViewRecipes from './ViewRecipes';

class Routes extends Component {

  render() {
    return (
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/SignUp' component={SignUp} />
        <Route exact path='/SignIn' component={SignIn} />
        <Route exact path='/ManageInventory' render={
          () => <ManageInventory 
                  inventory={this.props.inventoryState.inventory} 
                  handleRemoveItem = {this.props.handleRemoveItem} />
        } />
        <Route exact path='/ShoppingListBuilder' component={ShoppingListBuilder} />
        <Route exact path='/ViewRecipes' component={ViewRecipes} />
      </Switch>
    );
  }

}

export default Routes;
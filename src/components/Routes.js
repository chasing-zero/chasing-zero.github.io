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
        <Route exact path='/' render={
          () => <Landing inventory={this.props.inventoryState.inventory}/>
        } />
        <Route exact path='/SignUp' component={SignUp} />
        <Route exact path='/SignIn' component={SignIn} />
        <Route exact path='/ManageInventory' render={
          () => <ManageInventory 
                  inventory={this.props.inventoryState.inventory} 
                  handleRemoveItem = {this.props.handleRemoveItem} 
                  handleInventoryItemsChanged={this.props.handleInventoryItemsChanged}/>
        } />
        <Route exact path='/ShoppingListBuilder' component={ShoppingListBuilder} />
        <Route exact path='/ViewRecipes' render={
          () => <ViewRecipes 
                  recipe={this.props.recipeState} 
                  inventory={this.props.inventoryState.inventory}/>
        }/>
      </Switch>
    );
  }

}

export default Routes;
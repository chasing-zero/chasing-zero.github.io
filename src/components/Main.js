import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './Landing';
import SignUp from './SignUp';
import SignIn from './SignIn';
import ManageInventory from './ManageInventory';
import ShoppingListBuilder from './ShoppingListBuilder';
import ViewRecipes from './ViewRecipes';




const Main = () => (
  <main>
    <Switch>
    <Route exact path='/' component={Landing} />
    <Route exact path='/SignUp' component={SignUp} />
    <Route exact path='/SignIn' component={SignIn} />
    <Route exact path='/ManageInventory' component={ManageInventory} />
    <Route exact path='/ShoppingListBuilder' component={ShoppingListBuilder} />
    <Route exact path='/ViewRecipes' component={ViewRecipes} />


    </Switch>
  </main>
)

export default Main;

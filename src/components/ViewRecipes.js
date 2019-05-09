import React, { Component } from 'react';
import firebase from '../firebase-config';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import classNames from 'classnames';

const db = firebase.firestore();

/*Change this so Src image, and title are props*/
function ItemThumbnail (props){
  console.log(props.imgFile);
  /*want to make this a flex list of items so it displays horizontally against
   the screen and resizes properly. Should also include things like why it was
   suggested, or other info about it.
  */
  return(
  <div className="itemInfo">
    <img className="Avatar"
    /*change this to pull from data base*/
      /*src={props.item.avatarUrl}
      alt={props.item.name}
      */
      /*allegedly need to add a 'require()' so webpack works but still unable to
       render local or external images. Read more at :
       https://stackoverflow.com/questions/34582405/react-wont-load-local-images
       */
      src = {props.imgFile}      
      alt={props.caption}
    />
  {/*May want to include other stuff like link to more details*/}
  </div>
);
}

/*very similar to RecipeParameters in ShoppingListBuilder.js consider combining */
class RecipeSearchParameters extends Component{
  /* will hold selected filters*/
  state = {
  
  }
  render(){
    return(
      <div>
        <h1> Search Parameters</h1>
        <p> TBD: Hook these up to the data base so they work</p>
      </div>
    );
  }
}

// /*very similar to DisplayRecipieList in ShoppingListBuilder.js consider combining */
// class DisplaySuggestedRecipieList extends Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       data:{}
//     };
//   }
//   render(){
//     return(
//       <div>
//         {this.state.data.name}
//                                   <p>Because...</p>
//       </div>
//     );
//   }
// }



function ValidRecipes(props){
  // const recipes = props.recipes;
  // var recipe_promise = new Promise(function(){
  //   return recipes.filter(recipe => check_valid_recipe(recipe.ingredients));
  // });
  //const filtered_recipes = recipes.filter(recipe => check_valid_recipe(recipe.ingredients));
 
  return (
    <TableBody>
    {props.filtered_recipes.map(n => (
          
                <TableRow key={n.id}>
                <TableCell component="th" scope="row">
                  {n.name}
                </TableCell>
                <TableCell>
                {n.ingredients.toString()}
                </TableCell>
              </TableRow>
             ))}
      </TableBody>
  )
  
}

export default class ViewRecipes extends Component { 
  constructor(props){
    super(props);
    this.state = {
      recipes: this.props.recipe,
      inventory: this.props.inventory,
      filtered_recipes: []//this.props.recipe.filter(recipe => check_valid_recipe(recipe.ingredients))
    };
    //console.log(this.state.filtered_recipes);
  }

  check_valid_recipe(ingredients){
    console.log('test');
    let missing_ingredient_count = 0;
    var check = true;
    for (let i = 0; i < ingredients.length; i++){
      let ingredient = ingredients[i];
      if (!(this.props.inventory.map(item => item.name).includes(ingredient))){
        //console.log('recipe ingredient not in inventory');
        console.log(ingredient);
        console.log(missing_ingredient_count);
        missing_ingredient_count++;
        if (missing_ingredient_count > 1){
          console.log('failed');
          check = false;
          return false;
        }
      } 
       
    } 
    return true
  }

  componentDidMount(){
    let filtered = []
    for (let i=0; i<this.props.recipe.length; i++){
      let recipe = this.props.recipe[i];
      if (this.check_valid_recipe(recipe.ingredients)) {
        filtered.push(recipe);
      }
    }
    this.setState({
      filtered_recipes: filtered
    })
     
  }

  componentDidUpdate(prevProps){
    let filtered = []
    if (prevProps.recipe != this.props.recipe){
      console.log(this.props.recipe);
      console.log(this.props.inventory);
      for (let i=0; i<this.props.recipe.length; i++){
        let recipe = this.props.recipe[i];
        if (this.check_valid_recipe(recipe.ingredients)) {
          filtered.push(recipe);
        }
      }
      this.setState({
        recipes: this.props.recipe,
        inventory: this.props.inventory,
        filtered_recipes: filtered
      })
    }  
  }

  render () {  
      //const { classes } = this.props.classes;
      //const { recipe } = this.props.recipe;                                
      return (
        <div style={{margin: '30px'}}>
             <h1> View Recipes </h1>
             <TextField
                id="outlined-search"
                label="Search recipe"
                type="search"
                margin="normal"
                variant="outlined"
              />
             <h1> Recipes to choose from </h1>

            <Paper >
        <Table >

          <TableHead>
            <TableRow>
              <TableCell>Recipe</TableCell>
              <TableCell>Ingredients</TableCell>
             
            </TableRow>
          </TableHead>

          
          <ValidRecipes filtered_recipes={this.state.filtered_recipes}/>
          

        </Table>
      </Paper>
        </div>  
      );
   }
}
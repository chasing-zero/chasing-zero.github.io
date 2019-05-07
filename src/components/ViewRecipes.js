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

export default class ViewRecipes extends Component { 
  
  render () {  
      const { classes } = this.props;
      const { recipe } = this.props;                                 
      return (
        <div>
             <h1> View Recipes </h1>
             <p> This will display the tool that turns your Inventory to Recipies </p>
             <RecipeSearchParameters/>
             <h1> Recipies to choose from </h1>

             <Paper>
        <Table>

          <TableHead>
            <TableRow>
              <TableCell>Recipe</TableCell>
              <TableCell>Ingredients</TableCell>
             
            </TableRow>
          </TableHead>

          <TableBody>
            {recipe.map(n => (
          
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

        </Table>
      </Paper>
              
        </div>  
      );
   }
}
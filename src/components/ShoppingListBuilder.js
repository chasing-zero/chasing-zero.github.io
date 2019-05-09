import React, { Component } from 'react';
import firebase from '../firebase-config';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import axios from 'axios';

const db = firebase.firestore();

var allRecipes = [{name : 'Chicken Alfredo', img : 'Images/ChickenAlfredo.jpg', 
                              ingredients:['chicken','Alfredo','pasta']}, 
                            {name : 'Oatmeal', ingredients:'Oats'},
                            {name : 'Plain Pasta', img : 'Images/PlainPasta.png',
                              ingredients:['Butter','pasta']},
                            {name : 'Chicken and Rice', img : 'Images/ChickenAndRice.png',
                              ingredients:['chicken','Rice','Salt','Pepper']}];

function ItemThumbnail (props){
  //No longer used
  /*Change this so Src image, and title are props*/
  console.log(props.imgFile);
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
    <button type='button' onClick= "modifySelectedRecipies"> Add/Remove From List </button>
  </div>
);
}

function ShoppingList (props){
  console.log(props.items);
  //var title = props.title;
  var flatItems = props.items.flat();
  return(
  <div>
  {/*decide if we want the title in the component or div*/}
  <h2>List So Far:</h2>
  {/*TBD: Export ability*/}
  <button type="button">Export List</button>
  {/*products*/}
  <Paper >
        <Table >
          <TableHead>
            <TableRow>
              <TableCell>Food Item</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {flatItems.map((elem,index,items) => (
              <TableRow key = {index}>
                <TableCell component="th" scope="row">
                  {elem}
                </TableCell>
              </TableRow>
            ))}
          </TableBody> 
        </Table>
      </Paper>

  </div>
);
}


class SearchParameters extends Component{
  /* will hold selected filters*/

  render(){
    return(
      <div>
        <h1> Search Parameters</h1>
        <InputLabel htmlFor="item">Find Recipes With: </InputLabel>
        <Input id="item" name="item" autoComplete="item" autoFocus />
        <button type='button'> Search </button>
        <div>
        <input type='checkbox' name ='Vegiterian' />Vegitarian
        <input type='checkbox' name ='Vegan' />Vegan
        <input type='checkbox' name ='Gluten Free' />Gluten Free
        <input type='checkbox' name ='Gluten Free' />Paleo Diet
        </div>
      </div>
    );
  }
}

class DisplayRecipieList extends Component{
  constructor(props){
    super(props);
    this.state = {
      selectedRecipes : JSON.parse(localStorage.getItem('selectedRecipies'))
    };
    //this.selectRecipe = this.selectRecipe.bind(this);
    //this.deselectRecipe = this.deselectRecipe.bind(this);

  }
  getIngredients(recipes){
    return( recipes.map((elem)=>{
      console.log(elem.ingredients.toString());
      return elem.ingredients;
    }));
  }
  selectRecipe(recipe){

    console.log(recipe);
    var recipes = JSON.parse(localStorage.getItem('selectedRecipes'));
    console.log(recipes);
    recipes.push(recipe);
    localStorage.setItem('selectedRecipes',JSON.stringify(recipes));
    this.setState({selectedRecipes : recipes})
    console.log(recipes);
  }
  deselectRecipe(recipe){
    console.log(recipe);
    console.log(localStorage.getItem('selectedRecipes'));
    var recipes = JSON.parse(localStorage.getItem('selectedRecipes'));
    console.log(recipes);
    //recipes appears to be null
    var newSelection = recipes.filter(function(elem,index,recipes){
      console.log(elem);
      console.log(recipe.name);
      var recipeName = recipe.name.valueOf();
      console.log(recipeName);
      console.log(elem.name.valueOf());
      console.log(recipeName == (elem.name.valueOf()));
      return recipeName !== (elem.name.valueOf());
    });
    // var idx = recipes.indexOf(recipe);
    // if(idx !== -1) recipes.splice(idx,1);
    localStorage.setItem('selectedRecipes',JSON.stringify(newSelection));
    this.setState({'selectedRecipes': newSelection});
    console.log(recipes);
  }

  render(){
    //console.log(JSON.parse(this.props.recipiesToDisplay));
    //change this to selected recipies to display
    var selectedRecipes = JSON.parse(localStorage.getItem('selectedRecipes'));
    //var selectedRecipes = this.state.selectedRecipes;
    console.log(this.state.selectedRecipes);
    var itemsForList = this.getIngredients(selectedRecipes);
    return(
      <div>
      <div className="sideColumnLeft">
        <h2> Recipies Selected: </h2>
        <Paper >
          <Table >
            <TableHead>
              <TableRow>
                <TableCell>Recipe</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {selectedRecipes.map((elem,index,items) => (
                <TableRow key = {index}>
                  <TableCell component="th" scope="row">
                    {elem.name}
                  </TableCell>
                  <TableCell>
                    <button type="button" onClick={this.deselectRecipe.bind(this,elem)}>
                      Remove From List
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody> 
          </Table>
        </Paper>
        <h2> Recipies to choose from </h2>
        <Paper >
          <Table >
            <TableHead>
              <TableRow>
                <TableCell>Recipe</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {this.props.recipiesToDisplay.map((elem,index,items) => (
                <TableRow key = {index}>
                  <TableCell component="th" scope="row">
                    {elem.name}
                  </TableCell>
                  <TableCell>
                    <button type="button" onClick={this.selectRecipe.bind(this,elem)}>
                      Add To List
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody> 
          </Table>
        </Paper>
      </div>
      <div className="sideColumnRight">
        <ShoppingList title='Shopping List So Far' items = {itemsForList}/>
      </div>
      </div>
    );
  }
}

/*This component manages the recepie search and selection process*/
class RecipieList extends Component{
  /* will hold recepies to display*/
  constructor(props){
    super(props);
    this.state = {
      recipesToDisplay : [],
      selectedRecipes : []
    };
  }

  componentDidMount(){
    this.setState({recipesToDisplay:allRecipes})
  }

  render(){
    var recipesToDisplay = allRecipes;
    // localStorage.setItem('selectedRecipes', JSON.stringify([
    //   {name : 'Oatmeal', ingredients:'Oats'},
    //   {name : 'Chicken and Rice', img : 'Images/ChickenAndRice.png',
    //                           ingredients:['chicken','Rice','Salt','Pepper']}]));
    // axios.get('https://api.edamam.com/search',{
    //   params:{
    //     q:'chicken',
    //     app_id:'febca292',
    //     app_key:'13d2d421277919388d177c2e0fc83309'
    //   },
    //   crossdomain:true
    // }).then(function(response){
    //   console.log(response);
    //   response.data.hits.forEach((hit)=>{
    //     recipesToDisplay.push({name: hit.recipe.label})
    //     this.setState({recipesToDisplay: recipesToDisplay})
    //   });
    //   console.log(recipesToDisplay);
    // })
    // .catch(function(error){
    //   console.log(error);
    // });
    return(
      <div>
        <SearchParameters/>
        {/*<DisplayRecipieList recipiesToDisplay = {this.state.recipesToDisplay} />*/}
        <DisplayRecipieList recipiesToDisplay = {this.state.recipesToDisplay} />
      </div>
    )
  }
}


export default class ShoppingListBuilder extends Component { 
  /* will hold ingredients and recepies selected so far*/
  constructor(props){
    super(props)
    this.state = { 
    /*hardcoding ingredients for awhile*/
    items : ['chicken', 'pasta', 'Alfredo'],
    ingredientsSelected : [],
    recipesSelected : [],
    recipiesToDisplay : []
    }
  }

  componentDidMount(){
    //can load things when this component renders here.
    var recipeList = []
    //localStorage.setItem('selectedRecipes',JSON.stringify(recipeList))
  }


  render () {   
      console.log(JSON.parse(localStorage.getItem('selectedRecipes')));
      //var itemsForList = this.getIngredients(JSON.parse(localStorage.getItem('selectedRecipes')));  
      //console.log(itemsForList);
      // window.addEventListener("storage",()=>{
      //   this.setState({recipesSelected: JSON.parse(localStorage.getItem('selectedRecipes'))})
      // });
      //this.setState({ingredientsSelected:itemsForList})
      //Calculate items to display, update state
      //recipies selected = getSelectedRecipies
      //ingredients = combineSelectedIngredients()                              
      return (
        <div>
          {/*Page Div, so Header and Body div do not cause an error*/}
          <div>
              {/*Header Div*/}
              <Typography variant="h3" gutterBottom >Shopping List Builder</Typography>
               <h1>  </h1>
               <p> Use this tool to turn recepies into a shopping list. </p>
          </div>
          {/*<div className="sideColumnRight" >
                      <ShoppingList title='Shopping List So Far' items = {itemsForList}/>
                    </div>*/}
          <div>
            <RecipieList/>
          </div>
        </div>
      )
   }
}
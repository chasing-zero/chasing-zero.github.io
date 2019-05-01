import React, { Component } from 'react';



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
    )
  }
}

/*very similar to DisplayRecipieList in ShoppingListBuilder.js consider combining */
class DisplaySuggestedRecipieList extends Component{
  constructor(props){
    super(props);
    this.state = {

    };
  }
  render(){
    console.log(this.props.recipiesToDisplay);
    var recipieThumbs = this.props.recipiesToDisplay.map((elem,index,items)=>{
                        return (<div>
                                  <ItemThumbnail  imgFile = {elem.img}
                                              caption = {elem.name}
                                  />
                                  <p>Because...</p>
                                </div>);  
                });
    return(
      <div>
        <h1> Recipies to choose from </h1>
        {recipieThumbs}
      </div>
    )
  }
}

export default class ViewRecipes extends Component { 
  state = { 
  }
  render () {  
      //temporarily hardcoded
      var recipiesToDisplay = [{name : 'Chicken Alfredo', img : 'Images/ChickenAlfredo.jpg'}, 
                            {name : 'Plain Pasta', img : 'Images/PlainPasta.png'}];                                 
      return (
        <div>
             <h1> View Recipes </h1>
             <p> This will display the tool that turns your Inventory to Recipies </p>
             <RecipeSearchParameters/>
             <DisplaySuggestedRecipieList  recipiesToDisplay = {recipiesToDisplay}/>
        </div>
      )
   }
}
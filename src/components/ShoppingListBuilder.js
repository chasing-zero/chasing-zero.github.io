import React, { Component } from 'react';

/*Change this so Src image, and title are props*/
function ItemThumbnail (props){
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
  </div>
);
}

function ListElement(props){
  return <h1> {props.item} </h1>;
}


function ShoppingList (props){
  console.log(props.items);
  //var title = props.title;
  var products = props.items.map((elem,index,items)=>{
                  return (<ListElement item = {elem}/>);  
                });
  return(
  <div>
  {/*decide if we want the title in the component or div*/}
  <h2>List So Far:</h2>
  {/*TBD: Export ability*/}
  <button type="button">TBD: Export</button>
  {products}
  </div>
);
}


class SearchParameters extends Component{
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

class DisplayRecipieList extends Component{
  constructor(props){
    super(props);
    this.state = {

    };
  }
  render(){
    console.log(this.props.recipiesToDisplay);
    var recipieThumbs = this.props.recipiesToDisplay.map((elem,index,items)=>{
                        return (<ItemThumbnail  imgFile = {elem.img}
                                              caption = {elem.name}
                                />);  
                });
    return(
      <div>
        <h1> Recipies to choose from </h1>
        {recipieThumbs}
      </div>
    )
  }
}

/*This component manages the recepie search and selection process*/
class RecipieList extends Component{
  /* will hold recepies to display*/

  render(){
    var recipiesToDisplay = [{name : 'Chicken Alfredo', img : 'Images/ChickenAlfredo.jpg'}, 
                            {name : 'Plain Pasta', img : 'Images/PlainPasta.png'}];
    return(
      <div>
        <SearchParameters/>
        <DisplayRecipieList recipiesToDisplay = {recipiesToDisplay} />
      </div>
    )
  }
}


export default class ShoppingListBuilder extends Component { 
  /* will hold ingredients and recepies selected so far*/
  state = { 
    /*hardcoding ingredients for awhile*/
    items : ['chicken', 'pasta', 'Alfredo']
  
  }
  
  
  render () {   
      var itemsForList = this.state.items;                                
      return (
        <div>
          {/*Page Div, so Header and Body div do not cause an error*/}
          <div>
              {/*Header Div*/}
               <h1> Shopping List Builder </h1>
               <p> This will display the tool that turns recepies into a shopping list. </p>
          </div>
          <div className="sideColumnRight" >
            <ShoppingList title='Shopping List So Far' items = {itemsForList}/>
          </div>
          <RecipieList/>
        </div>
      )
   }
}
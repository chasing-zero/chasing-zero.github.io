import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

const styles = theme => ({
  snackbar: {
    margin: theme.spacing.unit,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  overall: {
    marginLeft: theme.spacing.unit * 2,
  },
});

// Convert a String to a Date representing that String
function stringToDate(_date,_format,_delimiter)
{
  var formatLowerCase=_format.toLowerCase();
  var formatItems=formatLowerCase.split(_delimiter);
  var dateItems=_date.split(_delimiter);
  var monthIndex=formatItems.indexOf("mm");
  var dayIndex=formatItems.indexOf("dd");
  var yearIndex=formatItems.indexOf("yyyy");
  var month=parseInt(dateItems[monthIndex]);
  month-=1;
  var formatedDate = new Date(dateItems[yearIndex],month,dateItems[dayIndex]);
  return formatedDate;
}

// Given a list of items, calculate the items expiring soon
function calculateItemsExpiringSoon(items, boundaryDate) {
  items.sort((a,b) => (a.name - b.name));

  // Filter out items that expire before May 2nd, 2019
  var itemsFiltered = items.filter(
    item => {
      var date = stringToDate(item.expiresOn,"mm/dd/yyyy","/");
      return date <= boundaryDate;
    }
  );

  return itemsFiltered;
}

class Landing extends Component { 

  // Set default boundary date and bind the handleChange() function
  constructor(props) {
    super(props);

    this.state = {
      boundaryDate: "05/16/2019"
    }

    this.handleChange = this.handleChange.bind(this);
  }

  // If the field is changed, update state with the new value
  handleChange(event) {
    const name = event.target.name;
    this.setState({ [name]: event.target.value });
  }

  render () {  
    const { classes } = this.props;      
    const { inventory } = this.props;    

    // Calculate the items expiring soon, based on the current boundary date
    var boundaryDateObj = stringToDate(this.state.boundaryDate, "mm/dd/yyyy", "/");
    const itemsExpiringSoon = calculateItemsExpiringSoon(inventory, boundaryDateObj);

    console.log(itemsExpiringSoon);
    return (
      <div className={classes.overall}>
          <h1> Welcome to Chasing Zero </h1>
          <p>Showing items expiring by the following date (default = 1 week):</p> 
          <form>
            <FormControl>
              <InputLabel>Boundary Date</InputLabel>
              <Input
                id="boundaryDate"
                name="boundaryDate"
                type="text"
                value={this.state.boundaryDate}
                onChange={this.handleChange} />
            </FormControl>
          </form>
          <div>
            {
              itemsExpiringSoon.map(inventoryItem =>
                <SnackbarContent
                  className={classes.snackbar}
                  message={
                    `WARNING: Your ` + inventoryItem.name + ` will be expiring on ` + inventoryItem.expiresOn
                  }
                />
              )
            }
          </div>
      </div>
    );
   }
}

export default withStyles(styles)(Landing);
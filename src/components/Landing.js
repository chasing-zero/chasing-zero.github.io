import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import EmailFormDialog from './EmailFormDialog';
import PhoneFormDialog from './PhoneFormDialog';


import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

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

// Convert a date from String representation into a Date object
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

// Convert a Date object into a String representation -- not actually used, but I'll keep 
// the utility function for now.
function convertDateObjectToString(dateObject) {
  var m = new String(dateObject.getMonth() + 1);
  alert("m length is " + m.length);
  if (m.length === 1) {
      m = "0" + m;
  }
  var d = new String(dateObject.getDate() + 1);
  if (d.length === 1) {
      d = "0" + d;
  }
  var y = new String(dateObject.getYear() + 1900);

  return m + "/" + d + "/" + y;
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

    // Get the date that's exactly one week from the current date
    var dateObj = new Date();
    dateObj.setDate(dateObj.getDate() + 7);
    this.state = {
      boundaryDate: dateObj,
    }

    this.handleChange = this.handleChange.bind(this);
  }

  // If the field is changed, update state with the new value
  handleChange(date) {
    this.setState({
      boundaryDate: date
    });
  }

  render () {  
    const { classes } = this.props;      
    const { inventory } = this.props;    

    // Calculate the items expiring soon, based on the current boundary date
    var boundaryDateObj = this.state.boundaryDate;
    const itemsExpiringSoon = calculateItemsExpiringSoon(inventory, boundaryDateObj);

    console.log(itemsExpiringSoon);
    return (
      <div className={classes.overall}>
          <h1> Welcome to Chasing Zero </h1>
          <p>Showing items expiring by the following date (default = 1 week):</p> 
          <DatePicker 
            selected={this.state.boundaryDate}
            onChange={this.handleChange}
          />

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
          
          <div style={{marginTop: "50px"}}>
            <h2>Want to get daily notifications of expiring foods?</h2>
            <PhoneFormDialog />
            <p></p>
            <EmailFormDialog />
            <p> We will never share your information with any third party. </p>
          </div>
          

      </div>
    );
   }
}

export default withStyles(styles)(Landing);
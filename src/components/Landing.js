import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import SnackbarContent from '@material-ui/core/SnackbarContent';

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

function calculateItemsExpiringSoon(items, boundaryDate) {
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
  render () {  
    const { classes } = this.props;      
    const { inventory } = this.props;    

    // Calculate the items expiring soon
    const boundaryDate = stringToDate("05/10/2019", "mm/dd/yyyy", "/");
    const itemsExpiringSoon = calculateItemsExpiringSoon(inventory, boundaryDate);
    console.log(itemsExpiringSoon);
    return (
      <div className={classes.overall}>
          <h1> Welcome to Chasing Zero </h1>
          <p> Inventory Items expiring soon: </p>
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
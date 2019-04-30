import React from 'react';
import InventoryTable from './InventoryTable';
import Typography from '@material-ui/core/Typography';
import 'typeface-roboto';
import { withStyles } from '@material-ui/core';
import AddInventoryItem from './AddInventoryItem';

const styles = theme => ({
  title: {
    marginTop: 15,
    marginLeft: theme.spacing.unit * 2,
  },
});

//TODO: This needs to be connected with Firebase to add/retrieve items
function ManageInventory(props) { 
  const { classes } = props;

  return (
    <div>
        <Typography variant="h3" gutterBottom className={classes.title}>Add Items to your Inventory</Typography>
        <AddInventoryItem />
        <Typography variant="h3" gutterBottom className={classes.title}> Your Pantry </Typography>
        <InventoryTable />
    </div>
  )
}

export default withStyles(styles)(ManageInventory);
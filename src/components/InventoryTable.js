import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = {
  root: {
    width: '95%',
    overflowX: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  table: {
    minWidth: 700,
  },
  icon: {
      width: 20,
  },
};

class InventoryTable extends Component {

  // This is a (really bad) function to wait X milliseconds before continuing execution
  sleepFor(sleepDuration) {
    var now = new Date().getTime();
    while (new Date().getTime() < now + sleepDuration) {}
  }

  // This function calls the function provided from App.js, passing in 
  // the item name and document ID (in Firebase) to be deleted.
  async handleClick(item, e) {
    const {handleInventoryItemsChanged} = this.props;

    // Remove the item from the database
    e.preventDefault();
    const { handleRemoveItem } = this.props;
    handleRemoveItem(item.name, item.doc_id);

    // Notify main app that the database was changed => will refresh inventory state to be re-rendered
    this.sleepFor(750);    
    handleInventoryItemsChanged();
  }

  render() {
    const { classes } = this.props;
    const { inventory } = this.props;
    console.log(inventory);

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>

          <TableHead>
            <TableRow>
              <TableCell>Food Item</TableCell>
              <TableCell align="right">Bought On</TableCell>
              <TableCell align="right">Expires On</TableCell>
              <TableCell align="right">Remove</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {inventory.map(n => (
              <TableRow key={n.id}>
                <TableCell component="th" scope="row">
                  {n.name}
                </TableCell>
                <TableCell align="right">{n.boughtOn}</TableCell>
                <TableCell align="right">{n.expiresOn}</TableCell>
                <TableCell className={classes.icon} >
                  <IconButton onClick={this.handleClick.bind(this, n)} color="inherit" align="right" type="submit">
                      <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody> 

        </Table>
      </Paper>
    );
  }
}

InventoryTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InventoryTable);

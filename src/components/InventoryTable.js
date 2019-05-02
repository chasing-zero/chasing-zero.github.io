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
  handleClick() {
    alert("Button clicked");
  }

  render() {
    const { classes } = this.props;
    const { inventory } = this.props;

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
                  <IconButton onClick={this.handleClick} color="inherit" align="right">
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

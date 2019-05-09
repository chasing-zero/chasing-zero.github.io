import React from 'react';
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

let id = 0;
function createData(name, buyDate, expireDate) {
  id += 1;
  return { id, name, buyDate, expireDate };
}

//TODO: This will eventually need to pull data from Firebase
const data = [
  createData('Carrots', '4/7/2019', '4/17/2019'),
  createData('Potatoes', '4/7/2019', '4/20/2019'),
  createData('French Bread', '4/7/2019', '4/11/2019'),
  createData('Chicken Breast', '4/5/2019', '4/13/2019'),
  createData('Salmon', '4/4/2019', '4/10/2019'),
];

function InventoryTable(props) {
  const { classes } = props;

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
          {data.map(n => (
            <TableRow key={n.id}>
              <TableCell component="th" scope="row">
                {n.name}
              </TableCell>
              <TableCell align="right">{n.buyDate}</TableCell>
              <TableCell align="right">{n.expireDate}</TableCell>
              <TableCell className={classes.icon} >
                <IconButton color="inherit" align="right">
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

InventoryTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InventoryTable);

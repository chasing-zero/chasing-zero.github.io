import React from 'react';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  form: {
    width: '80%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
    marginLeft: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * 4,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
  itemspacing: {
    marginRight: theme.spacing.unit * 4,
  },
});

//TODO: Clarify how food items should be entered (quantity? PLU number?)
function AddInventoryItem(props) {
  const {classes} = props;

  return (
    <form className={classes.form} required gutterBottom>
      <FormControl margin="normal" required className={classes.itemspacing}>
        <InputLabel htmlFor="item">Name of Food Item</InputLabel>
        <Input id="item" name="item" autoComplete="item" autoFocus />
      </FormControl>
      <FormControl margin="normal" required className={classes.itemspacing}>
        <InputLabel htmlFor="boughton">Bought On</InputLabel>
        <Input id="boughton" name="boughton"/>
      </FormControl>
      <FormControl margin="normal" required className={classes.itemspacing}>
        <InputLabel htmlFor="expirydate">Expiry Date</InputLabel>
        <Input id="expirydate" name="expirydate"/>
      </FormControl>

      <Button 
        className={classes.submit}
        type="submit"
        variant="contained"
        color="default"
      >
        Add to inventory
      </Button>
    </form>
  );
}

export default withStyles(styles)(AddInventoryItem);
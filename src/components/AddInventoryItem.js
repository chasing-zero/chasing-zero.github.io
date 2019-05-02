import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { withStyles } from '@material-ui/core';
import firebase from '../firebase-config';
const db = firebase.firestore();

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

class AddInventoryItem extends Component {

  // Set some default values - the state will get updated as we edit the form
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      boughtOn: '',
      expiresOn: '',
      // TODO: Figure out how to get the next ID number (hard-coded for now)
      id: 10
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // If a field is changed, update our state with that new value
  handleChange(event) {
    const name = event.target.name;
    this.setState({ [name]: event.target.value });
  }

  // When we submit the form, add the item to the inventory
  handleSubmit(event) {
    event.preventDefault();
    var data = {
      name: this.state.name,
      boughtOn: this.state.boughtOn,
      expiresOn: this.state.expiresOn,
      id: this.state.id
    }

    db.collection('inventory').add(data);
    alert(this.state.name + " was added to your inventory. Refresh to see results");
  }

  // This method generates the form to add items to a user's inventory
  render() {
    const {classes} = this.props;

    return (
      <form className={classes.form} onSubmit={this.handleSubmit} required gutterBottom>
        <FormControl margin="normal" required className={classes.itemspacing}>
          <InputLabel>Name of Food Item</InputLabel>
          <Input 
            id="name" 
            name="name" 
            type="text"
            value={this.state.name}
            onChange={this.handleChange} />
        </FormControl>
        <FormControl margin="normal" required className={classes.itemspacing}>
          <InputLabel>Bought On</InputLabel>
          <Input 
            id="boughtOn" 
            name="boughtOn"
            type="text"
            value={this.state.boughtOn}
            onChange={this.handleChange}/>
        </FormControl>
        <FormControl margin="normal" required className={classes.itemspacing}>
          <InputLabel>Expiry Date</InputLabel>
          <Input 
            id="expiresOn" 
            name="expiresOn"
            type="text"
            value={this.state.expiresOn}
            onChange={this.handleChange}/>
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
}

export default withStyles(styles)(AddInventoryItem);
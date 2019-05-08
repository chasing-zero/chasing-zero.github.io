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

    // Choose random number for next item ID
    var nextIdNumber = Math.floor(Math.random() * 1500) + 1;

    // Set initial state
    this.state = {
      name: '',
      boughtOn: '',
      expiresOn: '',
      id: nextIdNumber,
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
    const { handleInventoryItemsChanged } = this.props;

    event.preventDefault();
    var data = {
      name: this.state.name,
      boughtOn: this.state.boughtOn,
      expiresOn: this.state.expiresOn,
      id: this.state.id
    }

    db.collection('inventory').add(data);

     // Choose random number for the next item ID
     var nextIdNumber = Math.floor(Math.random() * 1500) + 1;

    // Clear out the form
    this.setState({
      name: "",
      boughtOn: "",
      expiresOn: "",
      id: nextIdNumber,
    });
    
    // Update main app that inventory items were changed => will refresh inventory state to be re-rendered
    handleInventoryItemsChanged();
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
          <InputLabel>Bought (MM/DD/YY)</InputLabel>
          <Input 
            id="boughtOn" 
            name="boughtOn"
            type="text"
            value={this.state.boughtOn}
            onChange={this.handleChange}/>
        </FormControl>
        <FormControl margin="normal" required className={classes.itemspacing}>
          <InputLabel>Expires (MM/DD/YY)</InputLabel>
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
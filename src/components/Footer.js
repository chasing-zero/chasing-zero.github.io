import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
});

class Footer extends Component {
  render(){
    const { classes } = this.props;

    return (
      <footer className={classes.footer}>
        
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Made by the Chasing-Zero Group
        </Typography>
      </footer>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
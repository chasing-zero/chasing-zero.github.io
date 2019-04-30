import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';

const styles = {
  link: {
    marginLeft: 10,
    marginRight: 10,
  }, 
  homeButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function NavBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" className="NavClass">
        <ToolBar>

          <IconButton component={Link} to='/' className={classes.homeButton} color="inherit" aria-label="Menu">
            <HomeIcon />
          </IconButton>

          <Typography component={Link} to='/SignUp' variant="h6" color="inherit" className={classes.link}>
            Sign Up
          </Typography>

          <Typography component={Link} to='/SignIn' variant="h6" color="inherit" className={classes.link}>
            Sign In
          </Typography>

          <Typography component={Link} to='/ManageInventory' variant="h6" color="inherit" className={classes.link}>
            Manage Inventory
          </Typography>

          <Typography component={Link} to='/ShoppingListBuilder' variant="h6" color="inherit" className={classes.link}>
            Shopping List Builder
          </Typography>

          <Typography component={Link} to='/ViewRecipes' variant="h6" color="inherit" className={classes.link}>
            View Recipes
          </Typography>

        </ToolBar>

      </AppBar>
    </div>
  )
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);


import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));



export default function marketButton() {
  const classes = useStyles();

  const [marketplace, setMarketplace]= useState('')

  return (
    <div>
      <Button 
        variant="contained" 
        onClick= {setMarketplace('United States of America')}
        className={classes.button}>
          U.S.A.
      </Button>
      <Button 
        variant="contained" 
        onClick= {setMarketplace('United Kingdom')}
        className={classes.button}>
          U.K.
      </Button>
      <Button 
        variant="contained" 
        onClick= {setMarketplace('Spain')}
        className={classes.button}>
        Spain
      </Button>
      <Button 
        variant="contained" 
        onClick= {setMarketplace('Mexico')}
        className={classes.button}>
        Mexico
      </Button>
      <Button 
        variant="contained" 
        onClick= {setMarketplace('Italy')}
        className={classes.button}>
        Italy
      </Button>
      <Button 
        variant="contained" 
        onClick= {setMarketplace('India')}
        className={classes.button}>
        India
      </Button>
      <Button 
        variant="contained" 
        onClick= {setMarketplace('Germany')}
        className={classes.button}>
        Germany
      </Button>
      <Button 
        variant="contained" 
        onClick= {setMarketplace('France')}
        className={classes.button}>
        France
      </Button>
      <Button 
        variant="contained" 
        onClick= {setMarketplace('Canada')}
        className={classes.button}>
        Canada
      </Button>
    </div>
  );
}
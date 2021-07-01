import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { TextField } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function Card7(props){
    const classes = makeStyles();
 
    return(
        <div className='container'  >
            <div className='row'>
            <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justify="center"
    style={{ minHeight: '100vh' }}
   >
            <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Do you smoke?
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <i class="material-icons" onClick={props.prevStep}>chevron_left</i>
      <FormControl component="fieldset">
  <RadioGroup row name='smoking' value={props.smoking} onChange={props.handleChange}>
    <FormControlLabel value="Yes" control={<Radio />} label="YES" />
    <FormControlLabel value="No" control={<Radio />} label="NO" />
  </RadioGroup>
</FormControl>
         <i class="material-icons" onClick={props.nextStep}>chevron_right</i>
      </CardActions>
    </Card>
    </Grid>
            </div>
        </div>
        
    );
}
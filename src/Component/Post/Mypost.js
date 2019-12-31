import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Navbar from './../../Component/Drawer/Drawer'


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

export default function Mypost() {
  const classes = useStyles();

  return (
    <div>
      <Navbar />
      <Paper className={classes.root} style={{margin:'0 auto',width:'600px'}}>
  <Typography style={{width:'600px'}}>
            <Typography variant="h5" >
             <label>Name: </label>
             {'JS Rajput'}
            </Typography>
        <Typography>
         <label>Description: </label>
         {'3 units of a Positive blood required. At Indus Hospital for my Friends.'}
         </Typography>
  <Typography >
<label>Urgency: </label>
{'Urgent'}
</Typography>
         <Typography>
         <label>Contact at: </label>
         {'12345678'}
         </Typography>
<Typography>
  <label>Additional Instructions : </label>
{'Call me when you reach hospital'}
</Typography>
    <Typography>
         <label>Volunteer till now : </label>
    {'5'}
    </Typography>

<Typography>
<label>Current requirment : </label>
{'2'}
</Typography>
        <Typography>
        <button type="button" class="btn" style={{backgroundColor:'#180e42',color:'white'}}>Volunteer</button>
        <button type="button" class="btn" style={{backgroundColor:'#180e42',color:'white'}}>Comment</button>
        </Typography>
</Typography>
      </Paper>
<br />
      <Paper className={classes.root} style={{margin:'0 auto',width:'600px'}}>
  <Typography style={{width:'600px'}}>
            <Typography variant="h5" >
             <label>Name: </label>
             {'JS Rajput'}
            </Typography>
        <Typography>
         <label>Description: </label>
         {'3 units of a Positive blood required. At Indus Hospital for my Friends.'}
         </Typography>
  <Typography >
<label>Urgency: </label>
{'Urgent'}
</Typography>
         <Typography>
         <label>Contact at: </label>
         {'12345678'}
         </Typography>
<Typography>
  <label>Additional Instructions : </label>
{'Call me when you reach hospital'}
</Typography>
    <Typography>
         <label>Volunteer till now : </label>
    {'5'}
    </Typography>

<Typography>
<label>Current requirment : </label>
{'2'}
</Typography>
        <Typography>
        <button type="button" class="btn" style={{backgroundColor:'#180e42',color:'white'}}>Volunteer</button>
        <button type="button" class="btn" style={{backgroundColor:'#180e42',color:'white'}}>Comment</button>
        </Typography>
</Typography>
      </Paper>
    </div>
  );
}
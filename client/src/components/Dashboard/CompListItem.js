import React from 'react';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
  'v-align': {
    display: 'flex',
    'flex-direction': 'column',
    'justify-content': 'center',
  },
}));

export default function CompListItem(props) {
  const classes = useStyles();
  return props.comp ? (
    <Accordion>
      {/* <CardMedia
        className={classes.lazyImage}
        component='img'
        //image={props.comps.photos[0].href}
        title='My Comps'
      /> */}
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls='panel1a-content'
        id='panel1a-header'
      >
        <Typography color='textSecondary' gutterBottom>
          {props.comp.address.street_number} {props.comp.address.street}{' '}
          {props.comp.address.street_suffix}
          <CardMedia
            className={classes.lazyImage}
            component='img'
            image={props.comp.photos[0].href}
            title='My House'
          />
        </Typography>
      </AccordionSummary>

      <AccordionDetails>
        <CardContent>
          <Typography color='textSecondary' gutterBottom></Typography>
          <Typography variant='h5' component='h2'>
            {props.comp.address.street_number} {props.comp.address.street}{' '}
            {props.comp.address.street_suffix}
          </Typography>
          <Typography variant='h5' component='h2'>
            $ {props.comp.price}
          </Typography>
          <Typography color='textSecondary'>
            {props.comp.address.city}, {props.comp.address.state},
          </Typography>
          <Typography variant='body2' component='p'>
            {/* Last Sold Date:{props.comp.lastSoldDate} */}
          </Typography>
        </CardContent>
        <CardActions className={classes.root}>
          <Button size='small' className='button'>
            <CircularProgress />
          </Button>
        </CardActions>
      </AccordionDetails>
    </Accordion>
  ) : (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls='panel1a-content'
        id='panel1a-header'
      >
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Typography color='textSecondary' gutterBottom>
              Comp {props.i + 1}
            </Typography>
          </Grid>
          <Grid item xs={8} className={classes['v-align']}>
            {' '}
            <LinearProgress />
          </Grid>
        </Grid>
      </AccordionSummary>
      <AccordionDetails>
        <CardContent>
          <Typography variant='h5' component='h2'></Typography>
          <br />
          <Typography variant='h5' component='h2'></Typography>
          <LinearProgress color='secondary' />
        </CardContent>
        <CardActions className={classes.root}>
          <Button size='small' className='button'>
            <CircularProgress />
          </Button>
        </CardActions>
      </AccordionDetails>
    </Accordion>
  );
}

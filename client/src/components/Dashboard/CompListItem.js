import React from 'react';
import '../../../src/App.css';
// import '../../assets/scss/style.scss';
import HouseIcon from '@material-ui/icons/House';
import multi from '../../assets/images/apartment-removebg-preview.png';
import { shadows } from '@material-ui/system';
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
import Image from 'material-ui-image';

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
  console.log(props);
  const styles = {
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    card: {
      position: 'relative',
    },
    overlay: {
      position: 'absolute',
      top: '10%',
      left: '10%',
      color: 'white',
      background: 'rgba(0, 0, 0, 0.5)',
      padding: '3px',

      // backgroundColor: 'white',
    },
  };
  const stylesPrice = {
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    card: {
      position: 'center',
    },
    overlay: {
      fontWeight: '200',
      position: 'absolute',
      top: '45%',
      left: '10%',
      color: 'white',
      background: 'rgba(0, 0, 0, 0.5)',
      padding: '3px',

      // backgroundColor: 'white',
    },
  };
  const stylesDetails = {
    // media: {
    //   height: 0,
    //   paddingTop: '.00%', // 16:9
    // },

    overlay: {
      position: 'absolute',
      top: '40%',
      left: '10%',
      color: 'white',
      background: '#437779', // Sets background color of Additional Details
      padding: '3px',
      backgroundColor: '#437779',
    },
  };
  const classes = useStyles();
  return props.comp ? (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls='panel1a-content'
        id='panel1a-header'
      >
        <Grid container className='grid'>
          <Grid item>
          <HouseIcon className='house-icon' />
          </Grid>
          <Grid item xs={10} sm={10} lg={10} xl={10}>
          <div>
              {props.comp.address.street_number} {props.comp.address.street}{' '}
              {props.comp.address.street_suffix}, {props.comp.address.city},{' '}
              {props.comp.address.state_code}
            </div>

            <div>$ {props.comp.price.toLocaleString()}</div>
          </Grid>
        </Grid>
      </AccordionSummary>
      <AccordionDetails>
        {/* <CardContent style={stylesDetails.overlay}> */}
   
         

        <Grid item xs={6}>
        <Typography className='fontCinzelBlack '>
            Additonal Details
          </Typography>

          <Typography
            variant='body2'
            color='textSecondary'
            component='p'
            className='fontCinzel'
          >
            House Size: {props.comp.building_size.size.toLocaleString()} sqft
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            Baths {props.comp.baths}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            Beds: {props.comp.beds}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            Property Type: {props.comp.prop_type}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            Year Built: {props.comp.year_built}
          </Typography>
        </Grid>
        <Grid item xs={6}>

          <CardMedia
            // className={classes.lazyImage} // TODO not needed?
            className='media'
            component='img'
            image="https://honka.com/wp-json/image/resize?w=860&h=570&src=uploads%2Fupload_7a7f9699ea710e1b677391928fcc5795.jpg"
            title='My House'
          />


        </Grid>
      </AccordionDetails>
    </Accordion>
  ) : (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls='panel1a-content'
        id='panel1a-header'
      >
        <Grid container spacing={12}>
          <Grid item xs={12}>
            <Typography align='center' color='textSecondary' gutterBottom>
              Pulling Similar Property
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes['v-align']}>
            {' '}
            <LinearProgress />
          </Grid>
        </Grid>
      </AccordionSummary>
    </Accordion>
  );
}

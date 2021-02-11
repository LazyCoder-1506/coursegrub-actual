import React from 'react';
import { Box, Grid, Typography, IconButton, Button, Checkbox } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Courses from '../data/data.json';

const useStyles = makeStyles(() => ({
  courseCard: {
    backgroundColor: '#fff',
    '&:hover': {
      boxShadow: '0px 3px 15px 5px #ddd'
    }
  },
  w100: {
    width: '100%',
  },
  goldenStar: {
    color: '#F5DE00',
  }
}));

export default function CourseCard() {
  const classes = useStyles();

  return Courses.map((CourseDetail, index) => (
    <Box
      component={Grid}
      container
      className={classes.courseCard}
      boxShadow={1}
      my={3}>
      {/* <Box
        component={Grid}
        item
        xs={3}
        p={2}>
        <img
          src='https://images-na.ssl-images-amazon.com/images/I/81Ds1CB+6fL._RI_.jpg'
          width='100%'>
        </img>
      </Box> */}
      <Box
        component={Grid}
        item
        container
        xs={12}
        p={2}>
        <Box
          component={Grid}
          item
          xs={11}>
          <Typography
            variant='h5'
            display='block'
            noWrap='true'
            className={classes.w100}>
            { CourseDetail.name }
          </Typography>
          <Typography
            variant='h6'
            display='block'
            noWrap='true'
            className={classes.w100}>
            { CourseDetail.instructors }{(CourseDetail.university) ? ' - ' + CourseDetail.university : ''}
          </Typography>
          <Typography
            variant='subtitle1'
            display='block'
            noWrap='true'
            className={classes.w100}>
            { CourseDetail.platform }
          </Typography>
        </Box>
        <Box
          component={Grid}
          item
          container
          xs={1}
          justify='flex-end'
          alignItems='flex-start'>
          <Checkbox
            icon={ <FavoriteBorderIcon /> }
            checkedIcon={ <FavoriteIcon /> }
            inputProps={{ 'aria-label': 'Favorite' }}>
          </Checkbox>
        </Box>
        <Box
          component={Grid}
          item
          xs={6}>
          <StarRateIcon className={(CourseDetail.stars > 0) ? classes.goldenStar : ''} />
          <StarRateIcon className={(CourseDetail.stars > 1) ? classes.goldenStar : ''} />
          <StarRateIcon className={(CourseDetail.stars > 2) ? classes.goldenStar : ''} />
          <StarRateIcon className={(CourseDetail.stars > 3) ? classes.goldenStar : ''} />
          <StarRateIcon className={(CourseDetail.stars > 4) ? classes.goldenStar : ''} />
          <Typography
            variant='body1'>
            { CourseDetail.reviews } reviews
          </Typography>
        </Box>
        <Box
          component={Grid}
          item
          xs={6}>
          <Typography
            variant='body2'
            align='right'
            paragraph='true'>
            { CourseDetail.certificate }
          </Typography>
          <Typography
            variant='body2'
            align='right'>
            { CourseDetail.price }
          </Typography>
        </Box>
      </Box>
      <Box
        component={Grid}
        item
        xs={12}
        px={2}
        pb={2}>
        <Button
          variant="contained"
          color="primary"
          size='small'
          disableElevation>
          KNOW MORE
        </Button>
      </Box>
    </Box>
  ));
}
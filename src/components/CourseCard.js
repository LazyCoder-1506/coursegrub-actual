import React from 'react';
import { Box, Grid, Typography, IconButton, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import StarRateIcon from '@material-ui/icons/StarRate';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

const useStyles = makeStyles(() => ({
  courseCard: {
    backgroundColor: '#fff',
  },
  w100: {
    width: '100%',
  }
}));

export default function CourseCard() {
  const classes = useStyles();

  return (
    <Box
      component={Grid}
      container
      className={classes.courseCard}
      boxShadow={1}
      mb={5}>
      <Box
        component={Grid}
        item
        xs={3}
        p={2}>
        <img
          src='https://images-na.ssl-images-amazon.com/images/I/81Ds1CB+6fL._RI_.jpg'
          width='100%'>
        </img>
      </Box>
      <Box
        component={Grid}
        item
        container
        xs={9}
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
            Python for Everybody
          </Typography>
          <Typography
            variant='h6'
            display='block'
            noWrap='true'
            className={classes.w100}>
            Charles Severance - University of Michigan
          </Typography>
          <Typography
            variant='subtitle1'
            display='block'
            noWrap='true'
            className={classes.w100}>
            Coursera
          </Typography>
        </Box>
        <Box
          component={Grid}
          item
          xs={1}>
          <IconButton>
            <BookmarkBorderIcon />
          </IconButton>
        </Box>
        <Box
          component={Grid}
          item
          xs={6}>
          <StarRateIcon />
          <StarRateIcon />
          <StarRateIcon />
          <StarRateIcon />
          <StarRateIcon />
          <Typography
            variant='body1'>
            456 reviews
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
            Certificate Available
          </Typography>
          <Typography
            variant='body2'
            align='right'>
            $14.99 (Financial Aid Available)
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
        <Box
        ml={2}
        display='inline'>
          <Button
            color="primary"
            size='small'>
            GO TO COURSE
        </Button>
        </Box>
      </Box>
    </Box>
  );
}
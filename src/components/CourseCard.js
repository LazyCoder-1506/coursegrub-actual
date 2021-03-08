import React from 'react';
import { Box, Grid, Typography, Drawer, Button, Checkbox, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CloseIcon from '@material-ui/icons/Close';
import SideBar from './SideBar'

const useStyles = makeStyles(() => ({
  courseCard: {
    backgroundColor: '#fff',
    marginBottom: '10px',
    '&:hover': {
      boxShadow: '0px 3px 15px 5px #ddd',
      cursor: 'pointer'
    }
  },
  w100: {
    width: '100%',
  },
  goldenStar: {
    color: '#F5DE00',
  },
  moreInfoSideBar: {
    width: '100vw',
    maxWidth: '1000px'
  }
}));

export default function CourseCard(props) {
  const classes = useStyles();

  const [isDrawerOpen, drawerState] = React.useState(false)
  const closeDrawer = () => (event) => {
    drawerState(false)
  }
  const openDrawer = () => (event) => {
    drawerState(true);
    props.handleCourseClick(props.index)
  }

  return (
    <React.Fragment>
      <Box
        component={Grid}
        container
        className={classes.courseCard}
        boxShadow={1}
        onClick={ openDrawer() }>
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
          style={{ padding: "10px" }}>
          <Box
            component={Grid}
            item
            xs={12}>
            <Typography
              variant='subtitle1'
              display='block'
              noWrap='true'
              className={classes.w100}>
              <strong>{ props.name }</strong>
            </Typography>
            <Typography
              variant='subtitle2'
              display='block'
              noWrap='true'
              className={classes.w100}>
              { props.instructors }{(props.university) ? ' - ' + props.university : ''}
            </Typography>
            <Typography
              variant='subtitle2'
              display='block'
              noWrap='true'
              className={classes.w100}>
              { props.platform }
            </Typography>
          </Box>
          <Box
            component={ Grid }
            item
            xs={6}>
            <StarRateIcon fontSize='small' className={(props.stars > 0) ? classes.goldenStar : ''} />
            <StarRateIcon fontSize='small' className={(props.stars > 1) ? classes.goldenStar : ''} />
            <StarRateIcon fontSize='small' className={(props.stars > 2) ? classes.goldenStar : ''} />
            <StarRateIcon fontSize='small' className={(props.stars > 3) ? classes.goldenStar : ''} />
            <StarRateIcon fontSize='small' className={(props.stars > 4) ? classes.goldenStar : ''} />
            <Typography
              variant='body2'
              display='inline'
              style={{ verticalAlign: "top", marginLeft: "5px" }}>
              ({ props.reviews } reviews)
            </Typography>
          </Box>
          <Box
            component={ Grid }
            item
            xs={6}>
            <Typography
              variant='body2'
              align='right'>
              { props.price }
            </Typography>
          </Box>
        </Box>
      </Box>
      <Drawer
        anchor={ 'right' }
        open={ isDrawerOpen }
        onClose={() => closeDrawer()}>
        <div
          className={ classes.moreInfoSideBar }>
          <Box
            component={ Grid }
            container
            justify='flex-end'>
            <IconButton onClick={ closeDrawer() }>
              <CloseIcon />
            </IconButton>
          </Box>
          <SideBar 
            sideContent={ props.sideContent }/>
        </div>
      </Drawer>
    </React.Fragment>
  );
}
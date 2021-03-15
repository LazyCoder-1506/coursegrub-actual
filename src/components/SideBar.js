import React from 'react'
import { Tabs, Tab, Box, Typography, Grid, Checkbox, List, ListItem, ListItemText, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import AllReviews from '../data/reviews.json'
import Reviews from './Reviews'

const sideStyles = makeStyles(() => ({
  subtitle: {
    fontWeight: 'bold',
    color: '#333',
    fontSize: '20px',
    marginBottom: '0px'
  }
}));

export default function SideBar(props) {
  const classes = sideStyles()

  const [value, setValue] = React.useState(0)
  const handleTabs = (e, val) => {
    setValue(val)
  }

  const courseReviews = AllReviews.filter(r => r.courseId == props.sideContent.id)
  const reviewCards = courseReviews.map(reviewItem =>
    <Reviews
      key={reviewItem.id}
      name={reviewItem.name}
      courseId={reviewItem.courseId}
      stars={reviewItem.stars}
      review={reviewItem.review}
      date={reviewItem.date} />)

  return (
    <div>
      <Tabs
        value={value}
        onChange={handleTabs}
        variant='fullWidth'>
        <Tab label='Course Overview' />
        <Tab label={`Reviews (${props.sideContent.reviews})`} />
      </Tabs>
      <TabPanel
        value={value}
        index={0}
        style={{padding : '16px'}}>
        <Box
          component={ Grid }
          container
          padding={3}>
          <Box
            component={Grid}
            item
            xs={11}
            my={5}>
            <Typography
              variant='h4'>
              <strong>{ props.sideContent.name }</strong>
            </Typography>
          </Box>
          <Box
            component={ Grid }
            item
            container
            xs={1}
            justify='flex-end'
            alignItems='flex-start'>
            <Checkbox
              icon={ <FavoriteBorderIcon fontSize={'large'} /> }
              checkedIcon={ <FavoriteIcon fontSize={'large'} /> }
              inputProps={{ 'aria-label': 'Favorite' }}>
            </Checkbox>
          </Box>
          <Box
            component={Grid}
            item
            xs={12}
            my={5}>
            <Typography
              variant='h5'>
              { props.sideContent.instructors }{(props.sideContent.university) ? ' - ' + props.sideContent.university : ''}
            </Typography>
          </Box>
          <Box
            component={Grid}
            item
            xs={12}
            style={{ marginBottom: '20px' }}>
            <Typography
              variant='h5'>
              { props.sideContent.platform }
            </Typography>
          </Box>
          <Box
            component={Grid}
            item
            xs={12}
            mb={1}>
            <p className={classes.subtitle}>Course Description</p>
            <Typography
              variant='body1'>
              { props.sideContent.brief } 
            </Typography>
          </Box>
          <Box
            component={ Grid }
            item
            xs={12}>
            <p className={classes.subtitle}>Price</p>
            <Typography
              variant='h6'>
              { props.sideContent.price }
            </Typography>
          </Box>
          <Box
            component={ Grid }
            item
            xs={12}>
            <p className={classes.subtitle}>Certificate</p>
            <Typography
              variant='body1'>
              { props.sideContent.certificate } 
            </Typography>
            <p className={classes.subtitle}>Duration of Course</p>
            <Typography
              variant='body1'>
              { props.sideContent.duration } 
            </Typography>
            {/* <List
              dense='true'>
              <ListItem>
                <ListItemText primary={`- ${props.sideContent.certificate}`} />
              </ListItem>
              <ListItem>
                <ListItemText primary={`- ${props.sideContent.duration}`} />
              </ListItem>
            </List> */}
          </Box>
          <Box
            component={ Grid }
            item
            xs={12}
            style={{ marginTop: '10px' }}>
            <Button
              color="primary"
              variant='contained'>
              GO TO COURSE
            </Button>
          </Box>
        </Box>
      </TabPanel>
      <TabPanel
        value={value}
        index={1}>
        <Box
          component={ Grid }
          container
          padding={3}>
          { reviewCards }
        </Box>
      </TabPanel>
    </div>
  );
}

function TabPanel (props) {
  const { children, value, index } = props;

  return (
    <div>
      {
        value===index && <h1>{ children }</h1>
      }
    </div>
  );
}
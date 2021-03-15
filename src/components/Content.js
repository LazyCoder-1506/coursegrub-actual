import React from 'react'
import Courses from '../data/data.json'
import CourseCard from './CourseCard'
import FilterPanel from './FilterPanel'
import { Box, Grid, Typography } from '@material-ui/core'

export default function Content () {
  const [sideContent, setSideContent] = React.useState('')
  const handleCourseClick = (index) => {
    let clickedCourse = Courses.filter(c => c.id == index)
    setSideContent(...clickedCourse)
  }

  const courseList = Courses.map(course => 
    <CourseCard
      key={ course.id }
      index={ course.id }
      name={ course.name }
      instructors={ course.instructors }
      university={ course.university }
      platform={ course.platform }
      price={ course.price }
      certificate={ course.certificate }
      stars={ course.stars }
      reviews={ course.reviews }
      handleCourseClick={ handleCourseClick }
      sideContent={ sideContent } />)
  
  return (
    <React.Fragment>
      <Box component={ Grid } container>
        <Grid item xs={false} lg={3}></Grid>
        <Grid item xs={9} style={{ marginBottom: '5px' }}>
          <Typography variant='caption' style={{ marginBottom: '5px' }}>{courseList.length} Results</Typography>
        </Grid>
        <Grid item xs={false} lg={1}></Grid>
        <Grid item xs={false} lg={2}>
          <FilterPanel />
        </Grid>
        <Grid item xs={12} lg={8}>
        <div>
          { courseList }
        </div>
        </Grid>
        <Grid item xs={false} lg={1}></Grid>
      </Box>
    </React.Fragment>

  );
}
import React from 'react'
import { Box, Grid, Link, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const pictures = [
  "https://www.maacgp.com/wp-content/uploads/2020/03/web-designing-courses-kolkata.jpg",
  "https://www.incimages.com/uploaded_files/image/1920x1080/getty_933383882_2000133420009280345_410292.jpg",
  "https://cdn1.aglasem.com/admission/wp-content/uploads/2019/12/COURSES-1140x641.png",
  "https://www.classcentral.com/report/wp-content/uploads/2020/06/top-100-course-pandemic.png",
  "https://online.stanford.edu/sites/default/files/styles/figure_default/public/2018-03/education-creating-effective-online-blended-courses_gse-yo.p.e.n.jpg?itok=QUn6gWp5",
  "https://youthincmag.com/wp-content/uploads/2019/03/NILIS-University-of-Colombo.jpg"
]

const recomendStyles = makeStyles(() => ({
  courseList: {
    overflowX: 'auto',
    whiteSpace: 'nowrap'
  },
}));

export default function RecommendedCourses (props) {
  const classes = recomendStyles()
  
  return (
    <React.Fragment>
      <Box
        component={ Grid }
        container
        padding={2}>
        <Box component={ Grid } item xs={false} lg={1}></Box>
        <Box component={ Grid } item container xs={12} lg={10}>
          <Box component={ Grid } item xs={12} lg={12}>
            <Typography
              variant='h6'>
              <strong>{ props.topic } </strong>
              <Link href="#"> (View All)</Link>
            </Typography>
          </Box>
          <Box component={ Grid } item xs={12} className={classes.courseList}>
            <Box padding={1}>
              {props.recCourses.map((picture, index) => (
                <img src={picture} style={{ width : "200px", height: "150px", marginRight: "5px", marginLeft: "5px" }} />
              ))}
            </Box>
          </Box>
        </Box>
        <Box component={ Grid } item xs={false} lg={1}></Box>
      </Box>
    </React.Fragment>
  );
}
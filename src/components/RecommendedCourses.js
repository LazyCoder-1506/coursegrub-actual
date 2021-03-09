import React from 'react'
import { Box, Grid, Link, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

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
    whiteSpace: 'nowrap',
    '&::-webkit-scrollbar': {
      display: 'none'
    },
    scrollBehavior: 'smooth',
  },
  scrollButton: {
    backgroundColor: '#555',
    height : '40px',
    width: '40px',
    borderRadius: '20px',
    border: 'none',
    outline: 'none',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    '&:hover': {
      backgroundColor: '#000000',
    }
  },
  scrollContainer: {
    position:'relative',
    overflowX: 'hidden',
    width: '100%'
  }
}));

export default function RecommendedCourses (props) {
  const classes = recomendStyles()

  const scrollRef = React.useRef(null)

  const scroll = (scrollOffset) => {
    scrollRef.current.scrollLeft += scrollOffset;
  };
  
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
          <div className={classes.scrollContainer}>
            <button className={classes.scrollButton} onClick={() => scroll(-400)}>
              <ChevronLeftIcon style={{ color: '#fff' }} />
            </button>
            <button className={classes.scrollButton} onClick={() => scroll(400)} style={{ right: '0' }}>
              <ChevronRightIcon style={{ color: '#fff' }} />
            </button>
            <Box component={ Grid } item xs={12} className={classes.courseList} ref={ scrollRef }>
              <Box padding={1}>
                {props.recCourses.map((picture, index) => (
                  <img src={picture} style={{ width : "200px", height: "150px", marginRight: "5px", marginLeft: "5px" }} />
                ))}
              </Box>
            </Box>
          </div>
        </Box>
        <Box component={ Grid } item xs={false} lg={1}></Box>
      </Box>
    </React.Fragment>
  );
}
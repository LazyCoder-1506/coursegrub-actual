import React from 'react'
import { Grid } from '@material-ui/core'
import CourseCard from './components/CourseCard'

export default function App() {
  return (
    <Grid container direction='column'>
      <Grid item container>
        <Grid item xs={0} lg={1}></Grid>
        <Grid item xs={12} lg={10}>
          <CourseCard></CourseCard>
        </Grid>
        <Grid item xs={0} lg={1}></Grid>
      </Grid>
    </Grid>
  );
}
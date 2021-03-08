import React from 'react'
import { Grid } from '@material-ui/core'
import Content from './Content'
import SearchBar from './SearchBar'

export default function CoursePage () {
  return (
    <React.Fragment>
      <Grid container direction='column'>
        <Grid item container>
          <Grid item xs={false} lg={1}></Grid>
          <Grid item xs={12} lg={9}>
            <SearchBar />
          </Grid>
          <Grid item xs={false} lg={2}></Grid>
        </Grid>
        <Grid item container>
          <Content />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
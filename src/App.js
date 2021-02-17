import React from 'react'
import { Grid } from '@material-ui/core'
import Content from './components/Content'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Grid container direction='column'>
        <Grid item container>
          <Grid item xs={false} lg={2}></Grid>
          <Grid item xs={false} lg={2}></Grid>
          <Grid item xs={12} lg={6}>
            <Content></Content>
          </Grid>
          <Grid item xs={false} lg={2}></Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
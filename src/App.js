import React from 'react'
import { Grid } from '@material-ui/core'
import Content from './components/Content'

export default function App() {
  return (
    <Grid container direction='column'>
      <Grid item container>
        <Grid item xs={false} lg={2}></Grid>
        <Grid item xs={12} lg={8}>
          <Content></Content>
        </Grid>
        <Grid item xs={false} lg={2}></Grid>
      </Grid>
    </Grid>
  );
}
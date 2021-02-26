import React from "react"
import { Box, Grid, Typography } from '@material-ui/core'
import SearchBar from "./SearchBar"
import { makeStyles } from '@material-ui/styles'

const headStyles = makeStyles(() => ({
  header: {
    backgroundColor: '#ADD0EF',
    height: '400px',
  }
}));

export default function HomePage () {
  const classes = headStyles()

  return (
    <React.Fragment>
      <Box
        component={ Grid }
        padding={2}
        container
        className={ classes.header }
        alignItems='center'>
        <Grid item xs={false} lg={2} />
        <Box
          component={ Grid }
          item
          xs={12} lg={8}>
          <Box marginBottom={5}>
            <Typography
              variant='h4'
              paragraph='true'
              align='center'>
              This is a Heading
            </Typography>
            <Typography
              variant='subtitle1'
              paragraph='true'
              align='center'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </Typography>
          </Box>
          <Box>
            <SearchBar />
          </Box>
        </Box>
        <Grid item xs={false} lg={2} />
      </Box>
    </React.Fragment>
  );
}
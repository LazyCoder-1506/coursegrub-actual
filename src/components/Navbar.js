import React from 'react'
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core'

export default function Navbar () {
  return (
    <AppBar position='sticky'>
      <Toolbar>
        <Typography
          variant='h6'>
          CourseGrub
        </Typography>
        <Button
          variant='contained'
          color='primary'
          disableElevation='true'>
          Home
        </Button>
        <Button
          variant='contained'
          color='primary'
          disableElevation='true'>
          Courses
        </Button>
        <Button
          variant='contained'
          color='primary'
          disableElevation='true'>
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
}
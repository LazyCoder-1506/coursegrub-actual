import React from 'react'
import { Grid, IconButton, TextField, Box, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search'
import SortIcon from '@material-ui/icons/Sort'

const useStyles = makeStyles(() => ({
  searchBarStyle: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.8)'
    }
  }
}));

export default function SearchBar () {
  const classes = useStyles();
  
  return (
    <React.Fragment>
      <Box component={ Grid } container>
        <Box
          component={ Grid }
          xs={12}
          marginY={2}>
          <form style={{width: '100%', display: 'flex'}}>
            <IconButton>
              <SearchIcon />
            </IconButton>
            <TextField
              label='Search'
              fullWidth
              size='small'
              variant='filled'
              InputProps={{ className: classes.searchBarStyle }}
            />
          </form>
        </Box>
      </Box>
    </React.Fragment>
  );
}
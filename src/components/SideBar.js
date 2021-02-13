import React from 'react'
import { Tabs, Tab, Box, Typography, Grid } from '@material-ui/core'

export default function SideBar() {
  const [value, setValue] = React.useState(0)
  const handleTabs = (e, val) => {
    setValue(val)
  }

  return (
    <div>
      <Tabs
        value={value}
        onChange={handleTabs}
        variant='fullWidth'>
        <Tab label='Course Overview' />
        <Tab label='Reviews' />
      </Tabs>
      <TabPanel
        value={value}
        index={0}
        style={{padding : '16px'}}>
        <Box
          component={ Grid }
          container>
          <Box
            component={Grid}
            item
            xs={12}
            my={5}>
            <Typography
              variant='h4'>
              Python for Everybody
            </Typography>
          </Box>
          <Box
            component={Grid}
            item
            xs={12}
            my={5}>
            <Typography
              variant='h5'>
              Charles Severance - University of Michigan
            </Typography>
          </Box>
          <Box
            component={Grid}
            item
            xs={12}
            mb={5}>
            <Typography
              variant='h5'>
              Coursera
            </Typography>
          </Box>
          <Box
            component={Grid}
            item
            xs={12}
            mb={1}>
            <Typography
              variant='body1'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
            </Typography>
          </Box>
        </Box>
      </TabPanel>
      <TabPanel
        value={value}
        index={1}>
        Reviews
      </TabPanel>
    </div>
  );
}

function TabPanel (props) {
  const { children, value, index } = props;

  return (
    <div>
      {
        value===index && <h1>{ children }</h1>
      }
    </div>
  );
}
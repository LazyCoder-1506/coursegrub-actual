import React from 'react'
import { Tabs, Tab } from '@material-ui/core'

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
        index={0}>
        Course Details
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
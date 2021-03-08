import React from 'react'
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Slider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  container: {
    boxSizing: 'border-box',
    width: '100%',
    paddingRight: '16px'
  },
  form: {
    backgroundColor: '#fff',
    boxSizing: 'border-box',
    width: '100%',
    padding: '16px',
  },
  checkbox: {
    paddingTop: '3px',
    paddingBottom: '3px'
  }
}));

const stars = [
  {
    value: 1,
    label: '1',
  },
  {
    value: 2,
    label: '2',
  },
  {
    value: 3,
    label: '3',
  },
  {
    value: 4,
    label: '4',
  },
  {
    value: 5,
    label: '5',
  },
];

export default function FilterPanel () {
  const classes = useStyles()

  const [state, setState] = React.useState({
    youtube: false,
    udemy: false,
    coursera: false,
    edx: false,
    freecodecamp: false,
    free: false,
    paid: false
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { youtube, udemy, coursera, edx, freecodecamp, free, paid } = state;

  return (
    <React.Fragment>
      <div className={ classes.container }>
        <form className={ classes.form }>
          <FormControl margin='dense' fullWidth={true}>
            <FormLabel component='legend'>Platform</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={ <Checkbox size='small' checked={youtube} onChange={handleChange} name='youtube' className={ classes.checkbox } /> }
                label='YouTube'
              />
              <FormControlLabel
                control={ <Checkbox size='small' checked={udemy} onChange={handleChange} name='udemy' className={ classes.checkbox } /> }
                label='Udemy'
              />
              <FormControlLabel
                control={ <Checkbox size='small' checked={coursera} onChange={handleChange} name='coursera' className={ classes.checkbox } /> }
                label='Coursera'
              />
              <FormControlLabel
                control={ <Checkbox size='small' checked={edx} onChange={handleChange} name='edx' className={ classes.checkbox } /> }
                label='EdX'
              />
              <FormControlLabel
                control={ <Checkbox size='small' checked={freecodecamp} onChange={handleChange} name='freecodecamp' className={ classes.checkbox } /> }
                label='FreeCodeCamp'
              />
            </FormGroup>
          </FormControl>
          <FormControl margin='dense' fullWidth={true}>
            <FormLabel component='legend'>Price</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={ <Checkbox size='small' checked={free} onChange={handleChange} name='free' className={ classes.checkbox } /> }
                label='Free'
              />
              <FormControlLabel
                control={ <Checkbox size='small' checked={paid} onChange={handleChange} name='paid' className={ classes.checkbox } /> }
                label='Paid'
              />
            </FormGroup>
          </FormControl>
          <FormControl fullWidth={true}>
            <FormLabel component='legend'>Minimum Stars</FormLabel>
            <Slider
              defaultValue={1}
              min={1}
              max={5}
              step={1}
              marks={stars}
              valueLabelDisplay='off'
            />
          </FormControl>
        </form>
      </div>
    </React.Fragment>
  );
}
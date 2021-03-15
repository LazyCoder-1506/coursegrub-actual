import React from 'react'
import { Card, CardHeader, CardContent, Avatar, makeStyles, Typography, Box, Grid } from '@material-ui/core'
import StarRateIcon from '@material-ui/icons/StarRate'

const useStyles = makeStyles(() => ({
  userAvatar: {
    color: '#fff',
    backgroundColor: '#5500AD',
  },
  goldenStar: {
    color: '#F5DE00',
  },
}));

export default function Reviews (props) {
  const styles = useStyles()
  
  return (
    <Box
      component={ Grid }
      boxShadow={3}
      marginBottom={3}
      style={{ width: '100%'}}>
      <Card>
        <CardHeader
          avatar={
            <Avatar
              alt={ `{props.name}` }
              className={ styles.userAvatar }>
              { props.name.charAt(0) }
            </Avatar>}
          title={ props.name }
          subheader={ props.date }
          style={{ paddingBottom: '0px' }}
        />
        <CardContent style={{ paddingTop: '0px' }}>
          <StarRateIcon className={(props.stars > 0) ? styles.goldenStar : ''} />
          <StarRateIcon className={(props.stars > 1) ? styles.goldenStar : ''} />
          <StarRateIcon className={(props.stars > 2) ? styles.goldenStar : ''} />
          <StarRateIcon className={(props.stars > 3) ? styles.goldenStar : ''} />
          <StarRateIcon className={(props.stars > 4) ? styles.goldenStar : ''} />
          <Typography
            variant='body2'
            color='textSecondary'
            component='p'>
            { props.review }
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
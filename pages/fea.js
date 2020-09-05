import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    borderRadius:"3px",
    border: "1px solid black",
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    
  },
  content: {
    flex: '3 0 auto',
  },
  cover: {
    width: 200,
    height:200,
  },

}));

export default function MediaControlCard() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
        <CardMedia
        className={classes.cover}
        image="https://dscnsec.com/favicon.png"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
          <a href="https://medium.com/@dscnsec/dsc-nsec-week-one-47944e5d115e" target="_blank">The Birth of DSC NSEC</a>
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            A Blog on Medium about DSC NSEC, how the club made its growth and so on.
          </Typography>
        </CardContent>
      </div>
      
    </Card>
    
  );
}
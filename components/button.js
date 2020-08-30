import React from 'react';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained" style={{backgroundColor:"#2196f3", color:"white"}}><Link href="/">
        Back to Home 🏠
      </Link></Button>
      <style jsx>{`
   #roni{
     color:white;
   }`}</style>
    </div>
  );
}

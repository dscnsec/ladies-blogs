import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link from 'next/link'
import MenuPopupState from "./menu"

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    fill:"white",
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  title: {
    flexGrow: 1,
  },
});

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={{root:classes.root}}>
      <AppBar style={{ background: 'white' }}>
        <Toolbar>
        
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <Link href="/"><img id="i"
              src="https://dscnsec.com/favicon.png"
            /></Link>
          </IconButton>
          <a href="https://dscnsec.com/" target="_blank"><div id="txt">DSC NSEC</div></a>
          <div id="right"><MenuPopupState/></div>
        </Toolbar>
      </AppBar>
      <style jsx>{`
      #right {
     margin-top: 1px;
     margin-right: 2px;
     position:absolute;
     top:1;
     right:0;
 }
      #github{
        margin-left:12rem;
        font-size:2rem;
      }
      #txt{
font-size:1.8rem;
      }
      @media screen and (min-width:900px)
      {
        #txt{
          font-size:1.5rem;
        }
          #github{
            margin-left:57rem;
        font-size:1.5rem;
          }
      }
      #i{
          width:75.5px;
          height:75.5px;
      }
      #app,Toolbar{
          background-color:white;
      }
      `}</style>
    </div>
  );
}
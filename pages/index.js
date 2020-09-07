import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Typography from "@material-ui/core/Typography"
import Link from 'next/link'
import Date from '../components/date'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import ComplexGrid from "./fea"
const useStyles = makeStyles({
  root: {
    maxWidth: 250,
  },
});


export default function Home({ allPostsData }) {
  const classes = useStyles();
  return (<><Head><title>DSC NSEC Blogs!</title>
  <meta charset="UTF-8"></meta>
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"></link>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    <link rel="icon" href="/images/favicon.ico" /> </Head>
    <Layout home>
    <center><img src="/images/banner.png" width="100%"></img></center>
            <br></br>      
<div>     <section  className={utilStyles.headingMd}></section></div>
<br></br>
<ComplexGrid/>
<div id="pro"><section>

<Grid container spacing={3}>
          {allPostsData.map(({ id, date, title, author, short, cover }) => (
         <Grid item xs={20} sm={4} key={id}>
           <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="120"
          src={cover} alt="author"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
          </Typography>
          <Typography variant="subtitle" color="textSecondary" component="p" style={{fontSize:"20px"}}>
          {author}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card><br></br></Grid>
          ))}
        </Grid>
      </section></div>
      <style jsx>{`
      .fir-clickcircle,.fig-author-figure-title a {
        margin-right: 30px;
     } 
     .fir-clickcircle {
      height: 130px;
      width: 130px;
      border-radius: 80px;
    }
    
    .fir-image-figure {
      margin: 0;
      display: flex;
      align-items: center;
      margin-bottom: 40px;
      position: relative;
      text-decoration: none;
    }  
    fir-image-figure .caption, .fir-image-figure figcaption {
      padding-left: 20px;
      padding-right: 15px;
    }  
      #pro{
    padding:1em 1em 1em 1em;
font-size:20px;
      }
      #p{
        background:rgb(74,76,120);
        padding:1em 1em 1em 1em;
        color:white;
        border: 2px;
        border-radius: 3px;
}
      }
        #blue{
          color:white;
        }
        .card {
          width:auto;
          height:auto;
          margin: 1rem 1rem 1rem 1rem;
          flex-basis:30%;
          padding: 1rem 1rem 1rem 1rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid black;
          border-radius: 12px;
          background color:white;
          transition: color 0.15s ease, border-color 0.15s ease;
          -webkit-box-shadow: 3px 3px 5px 6px grey;  
  -moz-box-shadow:    3px 3px 5px 6px grey;  
  box-shadow:         3px 3px 5px 6px grey;
        }`}</style>
    </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
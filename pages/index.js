import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Typography from "@material-ui/core/Typography"
import Link from 'next/link'
import Date from '../components/date'


export default function Home({ allPostsData }) {
  return (<><Head><title>DSC NSEC Blogs!</title>
  <meta charset="UTF-8"></meta>
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"></link>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    <link rel="icon" href="/images/favicon.ico" /></Head>
    <Layout home>
      <i><Typography variant="h3"><center><div id="pr">Write Your Own Story!</div></center></Typography></i>
      <br></br>
<center>      <img src="https://media3.giphy.com/media/pOZhmE42D1WrCWATLK/200w.webp?cid=ecf05e47v7hnpk4dp49owbh0iputoj6ml3naebla8karkx0g&rid=200w.webp"></img></center>

<br></br>   
<div id="p">     <section  className={utilStyles.headingMd}>We, at DSC NSEC, believe that everyone has a unique story to tell to the world- a story about them,how they reached success, how they never gave up, what challenges did they face, what was the final outcome. So we came up with our blog platform<span id="blue"> DSC NSEC blogs! </span>to help reach your stories to the world, to encourage more people in their journey. So, let's start writing !</section></div>
<br></br>
<div id="pro"><section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
  
<Typography variant="h2"><h2 className={utilStyles.headingLg}>Blogs📖🖋</h2></Typography>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, author, short, cover }) => (
         <div className="card"><li className={utilStyles.listItem} key={id}>
           <figure className="fir-image-figure">
           <img className="fir-author-image fir-clickcircle" src={cover} alt="author"></img>
           <figcaption>
    <div className="fig-author-figure-title" style={{fontSize:"30.6px",color:"#0C264E"}}><Link href="/posts/[id]" as={`/posts/${id}`}>
                <a><Typography variant="h5">{title}</Typography></a>
              </Link></div>
              <div className="fig-author-figure-title" style={{fontSize:"19px",color:"#0C264E"}}>{short}</div>
              <div className="fig-author-figure-title" style={{fontSize:"19px",color:"#0C264E"}}><Date dateString={date} /></div>
              <div className="fig-author-figure-title" style={{fontSize:"19px",color:"black"}}><i>{author}</i></div>
    </figcaption>
            </figure></li></div>
          ))}
        </ul>
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
import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import ContainedButtons from './button'
import ButtonAppBar from '../pages/tab'


const name = 'DSC NSEC Blogs!'
export const siteTitle = 'DSC NSEC Blogs!'

export default function Layout({ children, home }) {
  return (<>
    <ButtonAppBar/>
    <br></br>
    <br></br>
    <br></br>
    <div className={styles.container}>
      
      <Head>
      <meta http-equiv="X-UA-Compatible" content="ie=edge"></meta>
      <script type="text/javascript" async="" src="https://www.google-analytics.com/analytics.js"></script>
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"></link>
      <script src="/cdn-cgi/apps/head/6kU11nKgEkfrA6ZInbd7H1KCWSY.js"></script>
      <script src="https://www.googletagmanager.com/gtag/js?id=UA-86020000-1"></script>
      <link rel="manifest" href="/manifest.json"></link>
      <meta name="keywords" content="DSC, Developer, Student, Clus, Developer Student Clubs, DSC NSEC, NSEC, Netaji, Subhash, Engineering, College, Netaji Subhash Engineering College, Kolkata, West Bengal, Bengal, India, East, East India, Google, Google Developers, Community, Club, Clubs, People, DSC Blogs, DSC NSEC Ladies"></meta>
      <meta name="description" content="DSC NSEC Blogs"></meta>
      <meta name="author" content="Procheta Bhattacharyya"></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="DSC NSEC Blogs!"
        />
        <meta name="og:title" content="DSC NSEC Blogs " />
        <meta name="og:description" content="A site of DSC NSEC where you can post blogs about technology, your way through technology and many things." />
        <meta name="og:image" content="https://github.com/dscnsec/ladies-blogs/blob/master/public/images/banner.png?raw=true" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
          <ButtonAppBar/>
            
          </>
        ) : (
          <>
            
          </>
        )}
      </header>
      <main id= "t" style={{color:"#1E1E1E", fontSize:"21px"}}>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
            <ContainedButtons/>
        </div>
      )}
      <style jsx>{`
      `}</style>
    </div>
    </>
  )
}
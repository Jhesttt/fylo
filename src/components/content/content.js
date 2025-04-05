import React from 'react'
import classes from './content.module.css'
import intro from '../../images/illustration-intro.png'
import access from '../../images/icon-access-anywhere.svg'
import security from '../../images/icon-security.svg'
import collab from '../../images/icon-collaboration.svg'
import file from '../../images/icon-any-file.svg'
import productive from '../../images/illustration-stay-productive.png'
import arrow from '../../images/icon-arrow.svg'
import u1 from '../../images/profile-1.jpg'
import u2 from '../../images/profile-2.jpg'
import u3 from '../../images/profile-3.jpg'

const Content = () => {
  return (
    <main className={classes.main}>
        <div className={classes.intro}>
            <img src={intro} alt='illustration intro' className={classes.imgIntro}/>
            <h1 className={classes.headingIntro}>All your files in one secure location, accessible anywhere.</h1>
            <p className={classes.descIntro}>Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
            <button className={classes.btnStart}>Get Started</button>
        </div>
        <div className={classes.features}>
            <div className={classes.feature}>
              <img src={access} alt='access icon'/>
              <h3>Access your files, anywhere</h3>
              <p>The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.</p>
            </div>
            <div className={classes.feature}>
              <img src={security} alt='security icon'/>
              <h3>Security you can trust</h3>
              <p>2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.</p>
            </div>
            <div className={classes.feature}>
              <img src={collab} alt='collab icon'/>
              <h3>Real-time collaboration</h3>  
              <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
            </div>
            <div className={classes.feature}>
              <img src={file} alt='file icon'/>
              <h3>Store any type of file</h3>
              <p>Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.</p>
            </div>
        </div>
        <div className={classes.section}>
            <div className={classes.imgCont}>
              <img src={productive} alt='productivity illustration'/>
            </div>
            <div className={classes.descSection}>
              <h2>Stay productive, wherever you are</h2>
              <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
              <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
              <a href='fb.com'>See how Fylo works <img src={arrow} alt='arrow icon'/></a>
            </div>
        </div>
        <div className={classes.feedbacks}>
          <div className={classes.feedback}>
            <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
            <div className={classes.user}>
              <div className={classes.pfp}>
                <img src={u1} alt='profile'/>
              </div>
              <div className={classes.info}>
                <span className={classes.name}>Satish Patel</span>
                <span className={classes.job}>Founder & CEO, Huddle</span>
              </div>
            </div>
          </div>
          <div className={classes.feedback}>
            <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
            <div className={classes.user}>
              <div className={classes.pfp}>
                <img src={u2} alt='profile'/>
              </div>
              <div className={classes.info}>
                <span className={classes.name}>Bruce McKenzie</span>
                <span className={classes.job}>Founder & CEO, Huddle</span>
              </div>
            </div>
          </div>
          <div className={classes.feedback}>
            <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
            <div className={classes.user}>
              <div className={classes.pfp}>
                <img src={u3} alt='profile'/>
              </div>
              <div className={classes.info}>
                <span className={classes.name}>Iva Boyd</span>
                <span className={classes.job}>Founder & CEO, Huddle</span>
              </div>
            </div>
          </div>
        </div>
    </main>
  )
}

export default Content

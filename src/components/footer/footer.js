import React from 'react'
import classes from './footer.module.css'
import logo from '../../images/logo.svg' 

const Footer = () => {
  return (
        <div className={classes.container}>
            <div className={classes.logoCont}>
                <img src={logo} alt='Fylo Logo' className={classes.logo}/>
            </div>

            <div className={classes.flexed}>
                <div className={classes.infoCont}>
                    <div className={classes.info}>
                        <div className={classes.icon}>
                            <ion-icon name="location"></ion-icon> 
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className={classes.info}>
                        <div className={classes.icon}>
                            <ion-icon name="call"></ion-icon>
                        </div>
                        <p>+1-543-123-4567</p>
                    </div>
                    <div className={classes.info}>
                        <div className={classes.icon}>
                            <ion-icon name="mail"></ion-icon>
                        </div>
                        <p>example@fylo.com</p>
                    </div>
                </div>
                <div className={classes.footnav}>
                    <p>About Us</p>
                    <p>Jobs</p>
                    <p>Press</p>
                    <p>Blog</p>
                    <p>Contact Us</p>
                    <p>Terms</p>
                    <p>Privacy</p>
                </div>
                <div className={classes.socials}>
                    <ion-icon name="logo-facebook"></ion-icon>
                    <ion-icon name="logo-twitter"></ion-icon>
                    <ion-icon name="logo-instagram"></ion-icon>
                </div>
            </div>

{/* 
            <div className={classes.footer-links}>
                <p><i class="fa fa-map-marker"></i> Some address here</p>
                <p><i class="fa fa-phone"></i> +1-543-123-4567</p>
                <p><i class="fa fa-envelope"></i> example@fylo.com</p>
            </div>
            <div className={classes.footer-nav}>

            </div>
            <div className={classes.footer-social}>
                <a ><i className="fa fa-facebook"></i></a>
                <a ><i className="fa fa-twitter"></i></a>
                <a ><i className="fa fa-instagram"></i></a>
            </div> */}
        </div>
  )
}

export default Footer

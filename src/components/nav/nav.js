import React from 'react'
import classes from './nav.module.css'
import logo from '../../images/logo.svg' 

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <img className={classes.logo} src={logo} alt='Fylo Logo'/>
      <ul>
        <li><a href='https://www.google.com/'>Features</a></li>
        <li><a href='https://www.google.com/'>Team</a></li>
        <li><a href='https://www.google.com/'>Sign In</a></li>
      </ul>
    </nav>
  )
}

export default Nav

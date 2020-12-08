import React from 'react';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (

    <nav class=" nav-wrapper black darken-8">
        <ul id="nav-mobile" class="right hide-on-med-and-down">

	        <li><NavLink to='/'><i class="material-icons">home</i>Home</NavLink></li>
	        <li><NavLink to='/about'><i class="material-icons">accessibility</i>About</NavLink></li>
	        <li><NavLink to='/contact'><i class="material-icons">call</i>Contact</NavLink></li>
   
      </ul>
 
      <NavLink to = '/' class="center brand-logo "><i class="material-icons">fingerprint</i>Fipher's</NavLink>
       <a href="#" className="sidenav-trigger" data-target="mobile-links">
          <i class="material-icons">menu</i>
        </a>
	  <ul id="nav-mobile" class="left hide-on-med-and-down">
         <li><NavLink to='/'><i class="material-icons">home</i>Home</NavLink></li>
	        <li><NavLink to='/about'><i class="material-icons">accessibility</i>About</NavLink></li>
	        <li><NavLink to='/contact'><i class="material-icons">call</i>Contact</NavLink></li>
   
      </ul>
    <ul class="sidenav" id="mobile-links">
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/contact'>Contact</NavLink></li>
          
  </ul>
  </nav>



  

  )
}

export default Navbar;

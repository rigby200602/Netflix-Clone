import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
const Navbar = () => {
  return (
    <div className='navbars'>
      <div className="navbar-left">
        <img src={logo} alt="Logo" />
        <ul>
            <li>Home</li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
      </div>
      <div className="navbar-right">

      </div>
    </div>
  )
}

export default Navbar

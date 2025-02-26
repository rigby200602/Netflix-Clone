import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'


const Navbar = () => {
  return (
    <div className='navbar flex w-full text-sm text-[#e5e5e5] justify-between z-1'>
      <div className="navbar-left flex items-center gap-[50px]">
        <img src={logo} alt="Logo" width="90px" />
        <ul className='flex list-none gap-[20px]'>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="flex gap-[20px] items-center">
        <img src={search_icon} alt="search-icon" className='cursor-pointer w-[20px]'/>
        <p>Children</p>
        <img src={bell_icon} alt="bell-icon" className='cursor-pointer w-[20px]' />
        <div className="flex items-center gap-[10px] cursor-pointer">
          <img src={profile} alt="profile" className='w-[35px] rounded-[4px]' />
          <img src={caret_icon} alt="caret-icon" />
        </div>
      </div>
    </div>
  )
}

export default Navbar

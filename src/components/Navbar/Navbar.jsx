import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'


const Navbar = () => {
  return (
    <div className='navbar flex w-full text-sm text-[#e5e5e5] justify-between z-1 fixed'>
      <div className="navbar-left flex items-center gap-[50px]">
        <img src={logo} alt="Logo" width="90px" />
        {/* List items */}
        <ul className='flex list-none gap-[20px]'>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browse by Languages</li>
        </ul>
      </div>
      {/* Right Navbar */}
      <div className="flex gap-[20px] items-center">
        <img src={search_icon} alt="search-icon" className='cursor-pointer w-[20px]'/>
        <p>Children</p>
        <img src={bell_icon} alt="bell-icon" className='cursor-pointer w-[20px]' />
        <div className="navbar-profile flex items-center gap-[10px] cursor-pointer relative">
          <img src={profile} alt="profile" className='w-[35px] rounded-[4px]' />
          <img src={caret_icon} alt="caret-icon" />
          {/* Dropdown sigh out */}
          <div className="dropdown absolute top-full right-[0] w-max bg-[#191919] px-[22px] py-[18px] rounded-[2px] 
          underline z-1 hidden">
            <p className='text-[13px] cursor-pointer'>Sigh Out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar

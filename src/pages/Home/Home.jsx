import React from 'react'
import './Home.css' 
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="relative">
        <img src={hero_banner} alt="background" className='banner-img w-full'/>
        <div className="absolute w-full pl-[6%] bottom-[0]">
          <img src={hero_title} alt="title" className='w-[90%] max-w-[420px] mb-[30px]'/>
          <p className='max-w-[720px] text-[17px] mb-[20px]'>
            Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy.
          </p>
          <div className="hero_btns">
            <button>
              <img src={play_icon} alt="Play" />
              Play
            </button>
            <button>
              <img src={info_icon} alt="Info" />
              Info
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

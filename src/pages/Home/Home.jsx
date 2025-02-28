import React from 'react'
import './Home.css' 
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="relative">
        {/* background-img */}
        <img src={hero_banner} alt="background" className='banner-img w-full'/>
        <div className="absolute w-full pl-[6%] bottom-[0]">
          <img src={hero_title} alt="title" className='w-[90%] max-w-[420px] mb-[30px]'/>
          <p className='max-w-[720px] text-[17px] mb-[20px]'>
            Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy.
          </p>
          {/* play and info btns */}
          <div className="flex mb-[50px] gap-[10px]">
            <button className='btn inline-flex items-center gap-[10px] text-[15px] font-semibold bg-white rounded-[4px] cursor-pointer text-black'>
              <img src={play_icon} alt="Play" width='25px'/>
              Play
            </button>
            <button className='btn btn2 inline-flex items-center gap-[10px] text-[15px] font-semibold bg-[#6d6d6eb3] rounded-[4px] cursor-pointer text-[#fff]'>
              <img src={info_icon} alt="Info" width='25px'/>
              More Info
            </button>
          </div>
          {/* add Title cards */}
          <TitleCards />
          <div className='absolute'>
            <TitleCards title={'Blockbuster Movies'}/>
            <TitleCards title={'Only on Netflix'}/>
            <TitleCards title={'Upcomming'}/>
            <TitleCards title={'Top picks for you'}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

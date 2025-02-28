import React, { useEffect, useRef } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'


const TitleCards = ({title}) => {
  const cardsRef = useRef();

  const handleWheel = (e) =>{
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY;
  }

  useEffect(()=>{
    cardsRef.current.addEventListener('wheel',handleWheel);
  },[])

  return (
    <div className='titleCards mt-[50px] mb-[30px]'>
      <h2 className='mb-[8px] font-bold'>{title?title:"Polular on Netflix"}</h2>
      <div className="card_list flex gap-[10px] mr-8 overflow-scroll" ref={cardsRef}>
        {cards_data.map((card,index) => {
          return <div className="card relative" key={index}>
              <img src={card.image} alt="card" key={index} className='min-w-[240px] cursor-pointer rounded-[4px]'/>
              <p className='absolute right-[10px] bottom-[10px]'>{card.name}</p>
          </div>
        }) }
      </div>
    </div>
  )
}

export default TitleCards

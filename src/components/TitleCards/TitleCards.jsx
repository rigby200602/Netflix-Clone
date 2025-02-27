import React from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'

const TitleCards = () => {
  return (
    <div className='titleCards mt-[50px] mb-[30px]'>
      <h2 className='mb-[8px]'>Popular on Netflix</h2>
      <div className="card_list flex gap-[10px] mr-8">
        {cards_data.map((card,index) => {
          return <div className="card" key={index}>
              <img src={card.image} alt="card" className='w-[240px] cursor-pointer rounded-[4px]'/>
              <p>{card.name}</p>
          </div>
        }) }
      </div>
    </div>
  )
}

export default TitleCards

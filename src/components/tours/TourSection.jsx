import React from 'react'
import MainTitle from '../ai/MainTitle'

import css from './TourSection.module.css'
import ToursCard from './singleTour/ToursCard'

export default function TourSection() {

const cards = [
    {
      id: 1,
      town: 'New York',
      date: 'Fri 27 Nov 2016',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, ipsum!',
      img: 'https://www.w3schools.com/w3images/newyork.jpg',
    },
    {
      id: 2,
      town: 'Paris',
      date: 'Fri 28 Nov 2016',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, ipsum!',
      img: 'https://www.w3schools.com/w3images/paris.jpg',
    },
    {
      id: 3,
      town: 'San Fran',
      date: 'Fri 29 Nov 2016',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, ipsum!',
      img: 'https://www.w3schools.com/w3images/sanfran.jpg',
    },
  ];
  return (
    <div className={`${css.bgc}`}>
      <MainTitle title='TOUR DATES' subtitle='Remember to book your tickets!'/>
      <div className={css.grid}>
      {cards.map((obj) => {return <ToursCard key={obj.id} town={obj.town} date={obj.date} img={obj.img} text={obj.text}/>})}
      </div>
    </div>
  )
}

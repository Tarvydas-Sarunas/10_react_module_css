import React from 'react'
import css from './TourCard.module.css'
import Btn from '../../ai/Btn'

export default function ToursCard(props) {
  return (
    <div className={css.card}>
      <img src={props.img} alt={props.title} />
      <div className={css.textContainer}>
        <h3>{props.town}</h3>
        <p className={css.date}>{props.date}</p>
       <p>{props.text}</p>
      <Btn>Buy Tickets</Btn>
      </div>
    </div>
  )
}

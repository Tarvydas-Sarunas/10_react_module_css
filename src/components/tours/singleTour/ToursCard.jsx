import React from 'react'
import css from './TourCard.module.css'
import Btn from '../../ai/Btn'
import PropTypes from 'prop-types'

 function ToursCard(props) {
  return (
    <div className={css.card}>
      <img src={props.img} alt={props.town} />
      <div className={css.textContainer}>
        <h3>{props.town}</h3>
        <p className={css.date}>{props.date}</p>
       <p>{props.text}</p>
      <Btn>Buy Tickets</Btn>
      </div>
    </div>
  )
}

ToursCard.propsTypes = {
  props: PropTypes.exact({
    img: PropTypes.string.isRequired,
    town: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })
}

export default ToursCard
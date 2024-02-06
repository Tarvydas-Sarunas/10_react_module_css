import React from 'react'

export default function MainTitle(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.subtitle} </p>
    </div>
  )
}

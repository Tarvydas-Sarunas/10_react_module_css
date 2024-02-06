import React from 'react'
import css from './Btn.module.css'

export default function Btn({children}) {
  return (
    <button className={css.btn}>{children}</button>
  )
}

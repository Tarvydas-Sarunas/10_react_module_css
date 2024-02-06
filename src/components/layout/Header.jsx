import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import css from './Header.module.css'

export default function Header() {
  return (
    <header className={`${css.header} ${css.flexHeader} container`}>
      <Link to={'/'}>
      <h2 className={css.logo}>Logo</h2>
      </Link>
      <nav className={css.nav}>
        <NavLink className={css.navLink} to={'/'} >Home</NavLink>
        <NavLink className={css.navLink} to={'/About'} >About</NavLink>
        <NavLink className={css.navLink} to={'/Tours'} >Tours</NavLink>
      </nav>
    </header>
  )
}

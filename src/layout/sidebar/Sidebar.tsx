import React from 'react'
import './Sidebar.scss'
import { Link } from 'react-router-dom'
import { RiFontSize } from "react-icons/ri";

const Sidebar = () => {
  return (
    <aside className='sticky-sidebar'>
      <ul className='stiky-sidebar__menu'>
        <li className='sticky-sidebar__item'>
          <Link to='/' className='sticky-sidebar__link'><RiFontSize/>Fonts</Link>
        </li>
        <li className='sticky-sidebar__item'>
          <Link to='/' className='sticky-sidebar__link'><RiFontSize/>Fonts</Link>
        </li>
        <li className='sticky-sidebar__item'>
          <Link to='/' className='sticky-sidebar__link'><RiFontSize/>Fonts</Link>
        </li>
        <li className='sticky-sidebar__item'>
          <Link to='/' className='sticky-sidebar__link'><RiFontSize/>Fonts</Link>
        </li>
        <li className='sticky-sidebar__item'>
          <Link to='/' className='sticky-sidebar__link'><RiFontSize/>Fonts</Link>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar
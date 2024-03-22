import React from 'react'

import './Navigation.css'


function Navigation(props) {
  let navList = props.navList.map((nav)=> <li key={nav}>{nav}</li>)
  return (
    <div className='Navigation'>
      <a href="/">Zarah Tech</a>
      <ul className='nav-menu'>
        {navList}
      </ul>
    </div>
  )
}

export default Navigation
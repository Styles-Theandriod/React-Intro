import React from 'react'

import './Nav.css'

function Nav(props) {
  return (
    <div className='Nav' style={props}>
        <ul className="nav-list">
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Services</a></li>
            <li><a href="/">{props.welcome}</a></li>
        </ul>
    </div>
  )
}

export default Nav
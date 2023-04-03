import React from 'react'
import Switch from 'react-switch'

import './header.css'
const Header = ({ toggleTheme, theme }) => {
  return (
    <div className='header'>
      <h1>To Do List </h1>
      <Switch onChange={toggleTheme} checked={theme === 'dark'} />
    </div>
  )
}

export default Header
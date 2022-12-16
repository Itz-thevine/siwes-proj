import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './Navbar.css'
import FinderrLight from '../../assets/images/logo_navbar.png'
import FinderrDark from '../../assets/images/logo.svg'
import MobileNavbar from './MobileNavbar/Slider'

function Navbar() {
  const location = useLocation()

  const getBGColor = () => location.pathname === '/' ? '#ffffff' : '#00322F'
  const getHomeColor = () => location.pathname === '/' ? '#FB002D' : '#ffffff'
  const getColor = () => location.pathname === '/' ? '#919191' : '#ffffff'

  return (
    <>
      <div className='navbar' style={{ backgroundColor: getBGColor() }}>
        <div className='right_navbar'>
          <img src={location.pathname === '/' ? FinderrLight : FinderrDark} alt='finderr' />
        </div>
        <div className='left_navbar'>
          <ul>
            <li><NavLink style={{ color: getHomeColor() }} to='/'>Home</NavLink></li>
            <li><NavLink style={{ color: getColor() }} activeStyle={{ color: '#FAFF00' }} to='/products'>Products</NavLink></li>
            <li><NavLink style={{ color: getColor() }} activeStyle={{ color: '#FAFF00' }} to='/services'>Services</NavLink></li>
            <li><NavLink style={{ color: getColor() }} activeStyle={{ color: '#FAFF00' }} to='/register'>Register</NavLink></li>
            <li><NavLink style={{ color: getColor() }} activeStyle={{ color: '#FAFF00' }} to='/business_profile'>Business Profile</NavLink></li>
          </ul>
        </div>
      </div>
      <div className='mobile_nav'>
        <MobileNavbar />
      </div>
    </>
  )
}

export default Navbar

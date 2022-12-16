import React from 'react'
import { Button } from 'antd'
import './Banner.css'

function Banner() {
  return (
    <div className='banner_container'>
      <div className='banner_actions'>
        <h2>Business Owner?</h2>
        <h3>Let us help you get discovered</h3>
        <p>Register your business today</p>
      </div>
      <Button>Register</Button>
    </div>
  )
}

export default Banner

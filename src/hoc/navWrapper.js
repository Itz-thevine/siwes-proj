import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Banner from '../components/Banner/Banner'
import Footer from '../components/Footer/Footer'

function navWrapper(Component) {
  const wrapper = () => (
    <div>
      <Navbar />
      <Component />
      <Footer />
    </div>
  )
  return wrapper;
}

export default navWrapper

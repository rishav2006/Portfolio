import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Registration from '../components/Registration'
import Footer from '../components/Footer'
import Login from '../components/Login'


const Authentication = () => {

  return (
    <div className='grid-bg h-screen w-full'>
      <Navbar/>
      {/* <Registration/> */}
      <Login/>
      <Footer/>
    </div>
  )
}

export default Authentication

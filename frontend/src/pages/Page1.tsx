import React from 'react'
import Navbar from '../components/Navbar'
import LandingPart from '../components/LandingPart'

const Page1 = () => {
  return (
    <div>
      <Navbar/>
      <div className='grid-bg h-screen flex justify-center pt-33 lg:pt-50 px-5'>
        <LandingPart/>
      </div>
    </div>
  )
}

export default Page1

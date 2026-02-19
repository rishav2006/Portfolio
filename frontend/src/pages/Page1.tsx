import React from 'react'
import Navbar from '../components/Navbar'
import LandingPart from '../components/LandingPart'

const Page1 = () => {
  return (
    <div>
      <Navbar/>
      <div className='grid-bg h-screen flex justify-center lg:pt-25 px-7'>
        <LandingPart/>
      </div>
    </div>
  )
}

export default Page1

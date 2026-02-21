import React from 'react'
import Navbar from '../../components/Navbar'
import LandingPart from '../../components/LandingPart'

const Page1 = () => {
  return (
    <div>
      <Navbar/>
      <div className='relative grid-bg h-screen flex justify-center pt-33 lg:pt-50 px-5 overflow-hidden'>
        <LandingPart/>
        <div className="absolute -top-40 -right-40 w-[600px] h-[500px] bg-gradient-to-br from-lime-400/30 to-blue-400/20 rounded-full blur-[100px] opacity-30 lg:opacity-40"></div>
        <div className="absolute -top-0 -left-40 w-[500px] h-[650px] bg-gradient-to-br from-green-500/20 to-lime-500/10 rounded-full blur-[100px] opacity-10 lg:opacity-40"></div>
      </div>
    </div>
  )
}

export default Page1

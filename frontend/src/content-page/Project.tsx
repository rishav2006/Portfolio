import React from 'react'
import Page1 from '../pages/Project-Activity/Project-Activity-1'
import Description from '../components/Description'
import Highlights from '../components/Highlights'
import Images from '../components/Images'
import FAQlist from '../components/FAQlist'
import TechStack from '../components/TechStack'
import Footer from '../components/Footer'

const Project = () => {
  return (
    <div className=''>
      <Page1/>
      <Highlights/>
      <Description/>
      <Images/>
      <div className='flex justify-between flex-wrap-reverse lg:flex-nowrap mt-3'>
        <FAQlist/>
        <div className='h-full w-0.5 bg-zinc-700'></div>
        <TechStack/>
      </div>
      <Footer/>
    </div>
  )
}

export default Project

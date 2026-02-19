import React from 'react'
import ProjectList from '../components/ProjectList'

const Page2 = () => {
  return (
    <div className='grid-bg h-screen w-full text-white py-5 pl-5 lg:py-8 lg:pl-15'>
      <h2 className='text-4xl'>Things I've <span className='text-indigo-400 font-med'>Built.</span></h2>
      <div className='flex lg:justify-start gap-6 overflow-x-auto no-scrollbar pt-7 lg:pt-5'>
        <ProjectList/>
        <ProjectList/>
        <ProjectList/>
      </div>
    </div>
  )
}

export default Page2

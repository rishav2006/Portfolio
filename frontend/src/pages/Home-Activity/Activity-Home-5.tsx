import React from 'react'
import InteractiveBanner from '../../components/InteractiveBanner'

const Page5 = () => {
  return (
    <div className='grid-bg flex justify-center relative overflow-hidden'>
      <InteractiveBanner/>
      <div className="absolute -top-40 -right-40 w-[600px] h-[500px] bg-gradient-to-br from-lime-400/30 to-blue-400/20 rounded-full blur-[100px] opacity-30 lg:opacity-30"></div>
        <div className="absolute -top-0 -left-40 w-[500px] h-[650px] bg-gradient-to-br from-green-500/20 to-lime-500/10 rounded-full blur-[300px] opacity-10 lg:opacity-40"></div>
    </div>
  )
}

export default Page5

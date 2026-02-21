import React from 'react'
import HighlightItem from './HighlightItem'

const Highlights = () => {
  return (
    <div className='text-white px-7 lg:px-10 py-10 flex flex-col gap-5'>
      <div className='flex items-center gap-4'>
        <h3 className='font-med text-3xl'>Highlights.</h3>
        <div className='w-full h-0.5 bg-zinc-700 lg:bg-zinc-800'></div>
      </div>
      <div className='flex justify-start gap-3 lg:gap-5 overflow-x-auto no-scrollbar'>
        <HighlightItem/>
        <HighlightItem/>
        <HighlightItem/>
        <HighlightItem/>
      </div>
    </div>
  )
}

export default Highlights

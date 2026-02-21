import React from 'react'
import FAQitem from './FAQitem'

const FAQlist = () => {
  return (
    <div className='text-white px-7 pb-7 lg:px-10 flex flex-col gap-5 w-full lg:w-5/8'>
      <div className='flex items-center gap-4'>
        <h3 className='font-med text-3xl'>FAQs.</h3>
        <div className='w-full h-0.5 bg-zinc-700 lg:bg-zinc-800'></div>
      </div>
      <div className='flex flex-col gap-1'>
        <FAQitem/>
        <FAQitem/>
        <FAQitem/>
        <FAQitem/>
        <FAQitem/>
      </div>
    </div>
  )
}

export default FAQlist

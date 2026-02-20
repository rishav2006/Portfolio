import React from 'react'
import TextSync from '../components/TextSync'

const Page3 = () => {
  return (
    <div className='grid-bg text-white px-5 py-13 lg:px-15 lg:py-12'>
      {/* <h2 className='text-4xl pb-7'>About Myself.</h2> */}
      <TextSync/>
      <a href="" className="bg-zinc-900 px-4 py-3 rounded-lg hover:bg-zinc-800 transition duration-300 transition-transform transition-shadow duration-280 ease-out transform-gpu">More about me</a>
    </div>
  )
}

export default Page3

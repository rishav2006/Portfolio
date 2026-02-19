import React from 'react'
import TextSync from '../components/TextSync'

const Page3 = () => {
  return (
    <div className='grid-bg h-screen text-white p-5 lg:px-15 lg:py-15'>
      {/* <h2 className='text-4xl pb-7'>About Myself.</h2> */}
      <TextSync/>
      <a href="" className="bg-zinc-800 px-4 py-3 rounded-lg">More about me</a>
    </div>
  )
}

export default Page3

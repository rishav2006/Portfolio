import React, { useState } from 'react'

const InteractiveBanner = () => {
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const emptyInputs = () => {
        setName("");
        setDesc("");
    }
  return (
    <div className='w-full lg:w-14/15 h-full lg:h-130 rounded-3xl flex justify-between items-center p-7 lg:p-15 flex-wrap gap-10 lg:gap-2'>
      <div className='w-full lg:w-6/11'>
        <h2 className='text-6xl lg:text-7xl pb-7 text-white'>Let's work <br/> <span className='text-lime-400'>together.</span></h2>
        <p className='text-gray-100'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est accusamus iure omnis, culpa libero quibusdam alias hic totam illo esse repellat! Est sint numquam sed animi eum praesentium velit, qui beatae enim illum magnam similique dolorum hic, atque, saepe inventore!</p>
      </div>
      <div className='flex flex-col w-100 text-md gap-2'>
        <input type="email" placeholder='Enter your email' className='px-3 py-2 outline-none bg-zinc-900 rounded-md text-white' value={name} onChange={(e) => setName(e.target.value)}/>
        <textarea name="" id="" placeholder='Type here to share your thoughts with me.' className='px-3 py-2 outline-none bg-zinc-900 rounded-md h-30 resize-none text-white' value={desc} onChange={(e) => setDesc(e.target.value)}></textarea>
        <input type="submit" value="Send" className='px-3 py-2 outline-none bg-lime-400 text-black rounded-md border-1 border-zinc-900 cursor-pointer transition transition-transform transition-shadow duration-280 ease-out transform-gpu hover:bg-lime-600 '/>
        <button className='px-3 py-2 outline-none bg-zinc-800 text-white rounded-md cursor-pointer' onClick={emptyInputs}>Reset</button>
      </div>
    </div>
  )
}

export default InteractiveBanner

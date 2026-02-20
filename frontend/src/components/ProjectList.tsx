import React from 'react'

type MediumCard2Props = {
  image: string;
};

const ProjectList = ({image}: MediumCard2Props) => {
    
  return (
    <div className='min-h-80 min-w-90 max-w-97 bg-zinc-900 rounded-2xl border-2 border-zinc-800 p-5 flex flex-col items-center transition-transform transition-shadow duration-280 ease-out transform-gpu hover:shadow-xl/5 hover:-translate-y-1'>
      <img src={image} alt="" className='w-250 h-35 object-cover rounded-md mb-3'/>
      <div className='flex flex-col gap-0.5'>
        <h2 className='text-xl font-med'>Tokyo: Experience typical Japanese Culture.</h2>
        <p className='font-light text-zinc-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, nemo iste maiores ea reiciendis esse expedita facilis ratione sapiente reprehenderit!</p>
      </div>
      <div className='w-85 h-[1px] bg-zinc-500 opacity-15 my-4'></div>
      <div className='flex justify-between w-full h-10'>
        <div className='flex items-center gap-2'>
            <p className='text-md'>Full-Stack Project</p>
        </div>
        <button className='bg-zinc-800 px-5 rounded-lg cursor-pointer text-white text-md'>View Project</button>
      </div>
    </div>
  )
}

export default ProjectList

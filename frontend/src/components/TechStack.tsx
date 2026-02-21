import React from 'react'
import TechStackItem from './TechStackItem'

const TechStack = () => {
  return (
    <div className='text-white px-7 pb-7 lg:px-10 flex flex-col gap-5'>
      <h3 className='font-med text-3xl'>Tech Stack Used.</h3>
      <div className='flex flex-col w-full gap-1 bg-zinc-900 p-5 rounded-xl'>
        <TechStackItem stackName={"Frontend"} stacks={"React Js with Redux Toolkit, Tailwind CSS"} logo={"desktop"} color={"text-red-500"}/>
        <TechStackItem stackName={"Backend"} stacks={"Node JS, Express JS"} logo={"server"} color={"text-blue-500"}/>
        <TechStackItem stackName={"Database"} stacks={"MongoDB NoSQL Database"} logo={"database"} color={"text-teal-500"}/>
        <TechStackItem stackName={"Deployment"} stacks={"Render Engine"} logo={"fly"} color={"text-indigo-400"}/>
      </div>
    </div>
  )
}

export default TechStack

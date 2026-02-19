import React from 'react'
import SkillComp from '../components/SkillComp'
import { logos } from '../data/SkillsLogo'

const Page4 = () => {
  return (
    <div className='h-screen'>
        <h2 className='text-4xl'>What I Work With</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 gap-7 place-items-center px-1">
        {logos.map((val) => (
            <SkillComp key={val.name} logo={val.image} />
        ))}
        </div>
    </div>
    
  )
}

export default Page4

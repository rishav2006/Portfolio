import React from 'react'

const SkillComp = ({logo}) => {
  return (
    <div className='w-28 h-23 lg:w-50 lg:h-45 bg-zinc-950 rounded-2xl flex justify-center'>
      <img src={logo} alt="" className='white-logo w-10 lg:w-20'/>
    </div>
  )
}

export default SkillComp

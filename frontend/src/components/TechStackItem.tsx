import React from 'react'

const TechStackItem = ({stackName, stacks, logo, color}) => {
  return (
    <div className='flex gap-3 text-md lg:text-lg items-start'>
      <div className='flex gap-3 items-center justify-between'>
        <i className={`fa-solid fa-${logo} ${color}`}></i>
        <h3>{stackName}:</h3>
      </div>
      <h3>{stacks}</h3>
    </div>
  )
}

export default TechStackItem

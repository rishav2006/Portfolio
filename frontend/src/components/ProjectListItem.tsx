import React from 'react'
import HighlightItem from './HighlightItem'
import logo from '../images/Logo-Demo.png'

const ProjectListItem = () => {
  return (
    <>
      <div className="pt-7 pb-2 border-b-1 border-zinc-700/80 px-4 lg:px-8 bg-zinc-900/60">
        <div className='flex gap-5 overflow-x-auto no-scrollbar pb-3'>
            <HighlightItem/>
            <HighlightItem/>
            <HighlightItem/>
            <HighlightItem/>
        </div>
        <div className='flex gap-3 px-5 pt-2 pb-3 justify-between flex-wrap'>
            <div className='flex gap-3'>
                <img src={logo} alt="" className='w-13 h-13 lg:w-18 lg:h-18 rounded-xl '/>
                <div className='text-white'>
                    <h3 className='text-med text-lg'>E-commerce Complete Backend System</h3>
                    <h4 className='opacity-80'>Category: E-Commerce</h4>
                </div>
            </div>
            <button>
                <div className='flex text-white items-center gap-2 border-1 border-zinc-700 px-3 py-1.5 rounded-full bg-zinc-800 cursor-pointer'>
                    <i className="fa-regular fa-eye"></i>
                    <h3>View Project</h3>
                </div>
            </button>
        </div>
      </div>
    </>
  )
}

export default ProjectListItem

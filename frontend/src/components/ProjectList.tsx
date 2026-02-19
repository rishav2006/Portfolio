import React from 'react'

const ProjectList = () => {
  return (
    <>
      <a className=' w-110 flex flex-col gap-2 justify-center items-center' href=''>
        <img src="https://t3.ftcdn.net/jpg/03/22/30/46/360_F_322304683_7ysRarFkmy2osfPKTOYQv7qTPofKelfb.jpg" alt="" className='w-110 h-70 rounded-3xl'/>
        <div className='flex flex-col pt-3'>
            <h4 className='text-2xl'>This is just a Demo Title</h4>
            <p className='sm:text-xl lg:text-md text-zinc-400 w-110'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, molestias tenetur quaerat repudiandae commodi, tempore consectetur nesciunt, ipsa obcaecati eligendi id!</p>
        </div>
      </a>
    </>
  )
}

export default ProjectList

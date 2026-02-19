import React from 'react'

const ProjectList = () => {
  return (
    <>
      <a className='w-90 lg:w-110 flex flex-col gap-2 justify-center items-center' href=''>
        <img src="https://t3.ftcdn.net/jpg/03/22/30/46/360_F_322304683_7ysRarFkmy2osfPKTOYQv7qTPofKelfb.jpg" alt="" className='w-110 h-70 rounded-3xl'/>
        <div className='flex flex-col pt-3'>
            <h4 className='text-3xl font-med'>This is just a Demo Title</h4>
            <p className='text-xl lg:text-[17px] text-zinc-400 w-90 lg:w-110'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa natus illum reiciendis, similique necessitatibus repellendus repellat atque sint dolorem, possimus aspernatur. Est ut repellat soluta illum et error magnam at similique. Repellendus libero culpa placeat doloribus optio consectetur dolore aliquam fuga at saepe ipsam nisi aspernatur porro.</p>
        </div>
      </a>
    </>
  )
}

export default ProjectList

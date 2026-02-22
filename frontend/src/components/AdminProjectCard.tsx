import React from 'react'
import logo from '../images/Logo-Demo.png'

const AdminProjectCard = () => {
  return (
    <a href='' className='min-h-55 w-42 bg-zinc-900 rounded-2xl border-2 border-zinc-800 p-5 flex flex-col items-center justify-center transition-transform transition-shadow duration-280 ease-out transform-gpu hover:shadow-xl/5 hover:-translate-y-1'>
      <img src={logo} alt="" className='max-h-30 max-w-30 object-cover object-top rounded-xl'/>
      <div className='flex flex-col items-start w-full pt-2'>
        <h2 className='font-semibold text-lg flex gap-3 items-center w-full text-white w-full line-clamp-3'>HappyStore - Ecommerce Backend</h2>
      </div>
    </a>
  )
}

export default AdminProjectCard

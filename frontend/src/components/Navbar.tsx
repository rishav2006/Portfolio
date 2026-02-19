import React from 'react'

const Navbar = () => {
  return (
    <div className='text-white flex justify-between px-8 py-6 text-md'>
      <div className="right">
        <h2>Rishav Pattnaik.</h2>
      </div>
      <div className="left">
        <ul className='flex gap-4'>
            <li className='transition-transform transition-shadow duration-280 ease-out transform-gpu hover:shadow-xl/5 hover:-translate-y-0.5'><a href="">Projects.</a></li>
            <li className='transition-transform transition-shadow duration-280 ease-out transform-gpu hover:shadow-xl/5 hover:-translate-y-0.5'><a href="">Freelance.</a></li>
            <li className='transition-transform transition-shadow duration-280 ease-out transform-gpu hover:shadow-xl/5 hover:-translate-y-0.5'><a href="">Connect with me.</a></li>
            <li className='transition-transform transition-shadow duration-280 ease-out transform-gpu hover:shadow-xl/5 hover:-translate-y-0.5'><a href="">About myself.</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar

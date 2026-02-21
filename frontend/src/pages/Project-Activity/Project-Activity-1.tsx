import React from 'react'
import Navbar from '../../components/Navbar'
import logo from '../../images/Logo-Demo.png'

const Page1 = () => {
  return (
    <div className="w-full h-110 lg:h-100 grid-bg-1">

  <div className="pt-30 lg:pt-40 px-8 lg:px-30">
    <div className="flex items-center justify-center">
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-12">
        <img src={logo} alt="HappyStore Preview" className="w-25 h-25 lg:w-40 lg:h-40 bg-zinc-300 rounded-3xl"/>
        <div className="flex flex-col justify-between text-white gap-2 lg:gap-0">
          <h3 className="text-2xl lg:text-4xl font-med">HappyStore - A Complete Ecommerce Backend Web Application</h3>
          <p className="text-zinc-300">Category: Ecommerce</p>
          <div className="flex gap-4">
            <a href="" className="bg-blue-500 hover:bg-blue-600 px-3 text-sm lg:px-4 py-2 rounded-lg transition duration-300 transform-gpu">Go to Website</a>
            <a href="" className="bg-zinc-800 hover:bg-zinc-700 px-3 text-sm lg:px-4 py-2 rounded-lg transition duration-300 transform-gpu">Github Link</a>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>
  )
}

export default Page1

import React from 'react'
import AdminNavbar from '../components/adminNavbar'
import AdminProjectCard from '../components/adminProjectCard'
import Footer from '../components/Footer'

const Dashboard = () => {
  return (
    <div>
      <AdminNavbar/>
      <div className='flex px-10 pt-25 pb-5 items-center justify-between flex-wrap gap-2'>
        <h2 className='text-3xl text-white'>Your <span className='text-lime-400'>Projects.</span></h2>
        <a href="" className='text-white bg-zinc-800 border border-zinc-700 px-3 py-1.5 rounded-lg'>Create new Project</a>
      </div>
      <div className='px-10 flex gap-4 flex-wrap pb-4'>
        <AdminProjectCard/>
        <AdminProjectCard/>
        <AdminProjectCard/>
        <AdminProjectCard/>
        <AdminProjectCard/>
        <AdminProjectCard/>
        <AdminProjectCard/>
        <AdminProjectCard/>
      </div>
      <Footer/>
    </div>
  )
}

export default Dashboard

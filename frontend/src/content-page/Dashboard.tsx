import React from 'react'
import AdminNavbar from '../components/adminNavbar'
import AdminProjectCard from '../components/adminProjectCard'

const Dashboard = () => {
  return (
    <div>
      <AdminNavbar/>
      <h2 className='text-3xl px-10 pt-25 pb-5 text-white'>Your <span className='text-lime-400'>Projects.</span></h2>
      <div className='px-10 flex gap-4 flex-wrap'>
        <AdminProjectCard/>
        <AdminProjectCard/>
        <AdminProjectCard/>
        <AdminProjectCard/>
        <AdminProjectCard/>
        <AdminProjectCard/>
        <AdminProjectCard/>
        <AdminProjectCard/>
      </div>
    </div>
  )
}

export default Dashboard

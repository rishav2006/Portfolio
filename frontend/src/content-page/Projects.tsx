import React from 'react'
import Navbar from '../components/Navbar'
import ProjectListItem from '../components/ProjectListItem'
import Footer from '../components/Footer'

const Projects = () => {
  return (
    <div>
      <Navbar/>
      <div className='pt-23 bg-zinc-900/60'></div>
      <ProjectListItem/>
      <ProjectListItem/>
      <Footer/>
    </div>
  )
}

export default Projects

import React from 'react'
import Page1 from '../pages/Home-Activity/Activity-Home-1'
import Page2 from '../pages/Home-Activity/Activity-Home-2'
import Page3 from '../pages/Home-Activity/Activity-Home-3'
import Page5 from '../pages/Home-Activity/Activity-Home-5'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div className='bg-zinc-950 min-h-screen'>
      <Page1/>
      <Page2/>
      <Page3/>
      <Page5/>
      <Footer/>
    </div>
  )
}

export default Home

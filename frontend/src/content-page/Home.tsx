import React from 'react'
import Page1 from '../pages/Page1'
import Page2 from '../pages/Page2'
import Page3 from '../pages/Page3'
import Page5 from '../pages/Page5'
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

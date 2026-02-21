import React from 'react'
import ProjectList from '../../components/ProjectList'

const Page2 = () => {
  return (
    <div className='grid-bg w-full text-white py-20 px-4 lg:py-18 lg:pl-15'>
      <h2 className='text-4xl'>Things I've <span className='text-lime-400 font-med'>Built.</span></h2>
      <div className='flex lg:justify-start gap-6 overflow-x-auto no-scrollbar pt-7 lg:pt-5'>
        <ProjectList image='https://i0.wp.com/www.touristjapan.com/wp-content/uploads/2025/02/map-of-tokyo-japan-travel-scaled.jpg?fit=2560%2C1707&ssl=1'/>
        <ProjectList image='https://media.istockphoto.com/id/635758088/photo/sunrise-at-the-eiffel-tower-in-paris-along-the-seine.jpg?s=612x612&w=0&k=20&c=rdy3aU1CDyh66mPyR5AAc1yJ0yEameR_v2vOXp2uuMM='/>
        <ProjectList image='https://media.istockphoto.com/id/1143539287/photo/channel-in-amsterdam-netherlands-houses-river-amstel.jpg?s=612x612&w=0&k=20&c=tYhG0NPq1eCGP3JgwFrphJK2VQ9mVHmEHZXUudzNCGE='/>
        <ProjectList image='https://t4.ftcdn.net/jpg/02/43/44/69/360_F_243446992_dlh2txwxYqNIF9jtZeUN5muF3eA7ngnH.jpg'/>
      </div>
    </div>
  )
}

export default Page2

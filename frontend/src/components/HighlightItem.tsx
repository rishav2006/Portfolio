import React from 'react'

const HighlightItem = () => {
  return (
    <div>
      <div className='h-67 w-78 lg:w-90 bg-zinc-900/60 backdrop-blur border border-zinc-800 rounded-3xl border-1 border-zinc-800 flex flex-col items-center transition-transform transition-shadow duration-280 ease-out transform-gpu hover:shadow-xl/5 hover:-translate-y-1 text-white'>
        <img src="https://res.cloudinary.com/aenetworks/image/upload/c_fill,w_1200,h_630,g_auto/dpr_auto/f_auto/q_auto:eco/v1/gettyimages-1390815938" alt="" className='w-250 h-50 object-cover rounded-t-3xl mb-1'/>
            <div className='flex flex-col gap-0.5 px-4 pb-3 pt-2'>
                <h2 className='text-lg font-med'>Learn UI Designing - A Complete Hands-on Course</h2>
            </div>
        </div>
    </div>
  )
}

export default HighlightItem

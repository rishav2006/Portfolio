import React from 'react'

const ImageItem = () => {
  return (
    <div className="flex-none w-[300px] h-[180px] 
  bg-zinc-900/60 backdrop-blur-md 
  rounded-3xl border border-zinc-800 
  overflow-hidden 
  transition-all duration-300 ease-out 
  transform-gpu hover:-translate-y-1 hover:shadow-xl/10">

  <img
    src="https://res.cloudinary.com/aenetworks/image/upload/c_fill,w_1200,h_630,g_auto/dpr_auto/f_auto/q_auto:eco/v1/gettyimages-1390815938"
    alt=""
    className="w-full h-full object-cover"
  />
</div>
  )
}

export default ImageItem

import React, { useState } from 'react'

const FAQitem = () => {
    const [isOpen, setIsOpen] = useState(false);
    const clickopen = () => {
        setIsOpen(!isOpen)
    }
    
  return (
    <div className="flex flex-col">
      <div onClick={clickopen} className="bg-zinc-900/80 flex justify-between items-center cursor-pointer hover:bg-zinc-800 p-7 h-12 transition rounded-xl">
        <h3 className="text-xl text-white">This is a title</h3>
        <i className={`fa-solid fa-chevron-down transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}></i>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <p className="font-light text-zinc-200 px-3 pb-3 pt-1.5">Lorem ipsum dolor sit, amet consectetur adipisicing elit.Explicabo quidem fuga sint tempora, quos tempore, ab iure,nesciunt architecto laborum modi dignissimos dolor magnamblanditiis animi.</p>
      </div>
    </div>
  )
}

export default FAQitem

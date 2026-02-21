import React, { useState } from 'react'

const Description = () => {
    const [open, setOpen] = useState(false)

  return (
    <div className="text-white px-7 pb-7 lg:px-10 flex flex-col gap-3">
  <div className='flex items-center gap-4'>
        <h3 className='font-med text-3xl'>Description.</h3>
        <div className='w-full h-0.5 bg-zinc-700 lg:bg-zinc-800'></div>
      </div>
  <div className="p-4 lg:p-5 bg-zinc-900 rounded-2xl">
    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${open ? "max-h-[4000px] opacity-100" : "max-h-24 opacity-90"}`}>
      <p className="text-zinc-300 leading-relaxed">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur eveniet officiis consequuntur aperiam omnis. Ipsa deserunt iusto quas, quibusdam, architecto veniam nam voluptas dignissimos obcaecati tempora similique at, nemo eum pariatur ratione quod quisquam cupiditate! A rerum beatae magnam molestias veniam, nihil dolore iusto illo tempore eligendi tenetur doloribus quidem hic non minima et? Provident adipisci, laboriosam ut, ad natus beatae eligendi magni neque voluptate est nobis dignissimos cum laborum qui accusantium rem aspernatur reiciendis mollitia! Fugiat sapiente ullam praesentium assumenda iure eius, accusamus consequatur laudantium tenetur sequi fugit repudiandae ab officiis quam aut quidem. Sit ullam, voluptatum eum impedit deserunt quibusdam officia velit laudantium rem odit modi dolorem, et a nostrum sed quaerat sint error! Recusandae, perspiciatis soluta quisquam sequi itaque voluptas rerum molestiae quia quidem? Excepturi praesentium voluptatem repellat dolorum tempora qui soluta molestias laudantium reprehenderit, nesciunt hic vero quia nobis architecto veniam consectetur eius non. Dignissimos laboriosam tempore animi, quasi quis nemo quaerat nisi fugiat assumenda maxime quo qui error autem voluptates nihil minus, perferendis totam alias debitis. Ipsam nulla ratione unde ipsum perferendis culpa adipisci tempore rem sed error. Eligendi quasi rem dolor, beatae libero minima! Quaerat fugit nostrum quas quia error quidem, beatae sequi harum!</p>
    </div>
    <button className="mt-3 text-sm text-blue-400 hover:text-blue-500 transition cursor-pointer" onClick={() => setOpen(!open)}> {open ? "Read less" : "Read more"} </button>

  </div>
</div>
  )
}

export default Description

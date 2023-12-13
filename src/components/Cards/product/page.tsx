
import Link from 'next/link'
import React, { useState } from 'react'

function ProductCard({data}:any) {
  const { title, image, id } = data

  const [expandText, setExpandText] = useState(false)

  return (
    <div className='bg-white p-3 rounded'>
      <h1 className='font-bold text-xl w-[230px] truncate'>{title}</h1>
      <div className='group w-[230px] h-[200px] relative cursor-pointer'>
        <img src={image} loading='lazy' alt='Imge' className='w-full h-full object-scale-down p-4 group-hover:opacity-75 transform transition duration-500 group-hover:scale-110'/>
        <div className='hidden w-full h-full absolute top-0 items-center justify-center group-hover:flex'>
          <Link href={`/product/${id}`}>
            <h3 className='bg-gray-500 p-1 rounded-sm text-white hover:bg-black w-auto' onMouseEnter={()=>setExpandText(true)} onMouseLeave={()=>setExpandText(false)}>View {(expandText)?'Details':''} </h3>
          </Link>
        </div>
      </div>
      <div className='flex justify-between'>
        <button className='bg-blue-700 p-2 rounded-sm text-white text-sm'>Add To Cart</button>
        <button className='bg-green-700 p-2 rounded-sm text-white text-sm'>Buy Now</button>
      </div>
    </div>
  )
}

export default ProductCard

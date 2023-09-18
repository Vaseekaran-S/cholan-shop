
import React from 'react'

function ProductCardSkeliton(){

  return (
    <div className='bg-white w-[350px] h-[350px] p-3 rounded animate-pulse'>
      <div className='w-[250px] h-[20px] bg-slate-700 rounded'></div>
      <div className='h-[250px] cursor-pointer mt-3 mb-3'>
        <div className='w-full h-full bg-slate-700 rounded'></div>
      </div>
      <div className='flex justify-between'>
          <div className='w-[100px] h-[35px] bg-slate-700 rounded'></div>
          <div className='w-[100px] h-[35px] bg-slate-700 rounded'></div>
      </div>
    </div>
  )
}

export default ProductCardSkeliton

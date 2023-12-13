
import React from 'react'

function ProductCardSkeliton(){

  return (
    <div className='bg-white p-3 rounded animate-pulse'>
      <h2 className='w-[230px] h-[20px] bg-slate-700 rounded'></h2>
      <div className='h-[200px] cursor-pointer mt-3 mb-3'>
        <div className='w-full h-full bg-slate-700 rounded'></div>
      </div>
      <div className='flex justify-between'>
          <div className='w-[90px] h-[30px] bg-slate-700 rounded'></div>
          <div className='w-[90px] h-[30px] bg-slate-700 rounded'></div>
      </div>
    </div>
  )
}

export default ProductCardSkeliton

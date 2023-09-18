
"use client"

import React from 'react'

function ProductSkeliton(){

    return (
        <div>

            <div className='mt-20 mb-20 animate-pulse flex flex-col items-center'>
                <h2 className='text-center font-bold mb-10 bg-slate-500 h-[15px] w-5/12 rounded'></h2>
                <div className='lg:px-20 w-full grid grid-cols-12 gap-10'>
                    <div className='col-span-12 md:col-span-5 flex items-center justify-center h-full w-full'>
                        <div className='h-[350px] w-10/12 bg-slate-700 rounded'></div>
                    </div>
                    <div className='col-span-12 md:col-span-7'>
                        <div className='flex'>
                            <h2 className='mt-5 bg-slate-500 h-[13px] w-4/12 rounded'></h2>
                            <h2 className='mt-5 ml-3 bg-slate-500 h-[13px] w-4/12 rounded'></h2>
                        </div>
                        <div className='flex'>
                            <h2 className='mt-5 bg-slate-500 h-[13px] w-4/12 rounded'></h2>
                            <h2 className='mt-5 ml-3 bg-slate-500 h-[13px] w-4/12 rounded'></h2>
                        </div>
                        <div className='flex'>
                            <h2 className='mt-5 bg-slate-500 h-[13px] w-4/12 rounded'></h2>
                            <h2 className='mt-5 ml-3 bg-slate-500 h-[13px] w-4/12 rounded'></h2>
                        </div>
                        <div>
                            <h2 className='mt-5 bg-slate-500 h-[13px] w-4/12 rounded'></h2>
                            <h2 className='mt-5 ml-3 bg-slate-500 h-[10px] w-10/12 rounded'></h2>
                            <h2 className='mt-5 ml-3 bg-slate-500 h-[10px] w-10/12 rounded'></h2>
                            <h2 className='mt-5 ml-3 bg-slate-500 h-[10px] w-10/12 rounded'></h2>
                            <h2 className='mt-5 ml-3 bg-slate-500 h-[10px] w-10/12 rounded'></h2>
                        </div>
                        <div >
                            <h2 className='mt-5 bg-slate-500 h-[13px] w-4/12 rounded'></h2>
                            <h2 className='mt-5 ml-3 bg-slate-500 h-[13px] w-7/12 rounded'></h2>
                            <h2 className='mt-5 ml-3 bg-slate-500 h-[10px] w-4/12 rounded'></h2>
                        </div>
                        <div className='flex'>
                            <h2 className='mt-5 bg-slate-500 h-[30px] w-[90px] rounded mr-3'></h2>
                            <h2 className='mt-5 bg-slate-500 h-[30px] w-[90px] rounded'></h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductSkeliton


import ProductCardSkeliton from '@/components/Cards/product/loading'
import React from 'react'

function ProductSectionSkeliton() {

    const products = [0,0,0,0]
    return (
        <div className='bg-black mb-10 rounded-md p-5'>
            <h2 className='text-2xl font-bold text-white capitalize'></h2>
            <div className='h-auto flex gap-5 p-3 overflow-x-auto overflow-y-hidden'>
                {products.map((e, i) => {
                    return (
                        <ProductCardSkeliton key={i}/>
                    )
                })}
            </div>
        </div>
    )
}

export default ProductSectionSkeliton

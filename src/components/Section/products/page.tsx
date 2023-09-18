import ProductCard from '@/components/Cards/product/page'
import React from 'react'

type Product = {
    products: [{
        id: number,
        title: string,
        category: string,
        description: string,
        image: string,
        price: number,
        rating: {
            count: number,
            rate: number
        }
    }],
    category: string
}

function ProductSection({ products, category }: Product) {
    return (
        <div className='bg-black mb-10 rounded-md p-5'>
            <h2 className='text-2xl font-bold text-white capitalize'>{category}</h2>
            <div className='h-auto flex gap-5 p-3 overflow-x-auto overflow-y-hidden'>
                {products.map((e, i) => {
                    return (
                        (e.category == category) ? (
                            <ProductCard data={e} key={i} />
                        ) : (
                            ""
                        )
                    )
                })}
            </div>
        </div>
    )
}

export default ProductSection


"use client"

import React, { useEffect, useState } from 'react'
import ProductSkeliton from './loading'

type Product = {
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
}

function page({ params }: any) {

  const [loading, setLoading] = useState(true)
  const [product, setProduct] = useState<Product>({
    id: 0,
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
    rating: {
      rate: 0,
      count: 0
    }
  });


  const getProduct = async () => {
    const responce = (await fetch(`/api/products/${params.name}`))
    const data = (await responce.json()).data
    if(data){
      setProduct(data)
      setLoading(false)
    }
  }

  useEffect(() => {
    getProduct()
  })

  return (
    <div>

      {loading ? (
        <ProductSkeliton/>
      ) : (

        <div className='mt-20 mb-20'>
          <h2 className='text-3xl text-center font-bold mb-20'>{product.title}</h2>
          <div className='lg:px-20 w-full grid grid-cols-12 gap-10'>
            <div className='col-span-12 md:col-span-5 flex items-center justify-center'>
              <img src={product.image} alt="Product_Image" loading='lazy' className='md:h-[400px] md:w-[400px] h-[300px] w-[300px] object-scale-down' />
            </div>
            <div className='col-span-12 md:col-span-7'>
              <h2 className='text-xl font-bold mt-2'>Product Id : {product.id}</h2>
              <h2 className='text-xl font-bold mt-2'>Category : {product.category}</h2>
              <div className='flex items-center mt-2'>
                <h2 className='text-xl font-bold'>Price : {product.price}</h2>
                <span className='bg-green-600 text-md ml-3 p-1 rounded text-white'>30% off</span>
              </div>
              <h2 className='text-xl font-bold mt-2'>Description : </h2>
              <p className='text-md font-medium ml-3'>
                {product.description}
              </p>
              <h2 className='text-xl font-bold mt-2'>Rating : <span className='text-green-600'>{(product.rating?.rate) * 20}%</span></h2>
              <div className='w-[400px] h-[20px] bg-gray-200 rounded ml-3'>
                <div className='mt-2 mb-2 h-full bg-yellow-300 rounded' style={{ width: (product.rating?.rate) * 80 }}></div>
              </div>
              <p className='pl-3 mb-3'>{Math.round((product.rating?.count) * (product.rating?.rate) / 5)} out of {product.rating?.count} like this.</p>
              <button className='bg-blue-700 p-2 rounded-sm text-white text-sm'>Add To Cart</button>
              <button className='bg-green-700 p-2 rounded-sm text-white text-sm ml-5'>Buy Now</button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default page


"use client"

import ProductCardSkeliton from '@/components/Cards/product/loading';
import ProductCard from '@/components/Cards/product/page'
import ServiceCard from '@/components/Cards/service/page'
import ProductSection from '@/components/Section/products/page';
import Image from 'next/image'
import { useEffect, useState } from 'react';

type Product = [{
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
}]

function page() {

  const data = [
    {
      name: "Mobiles",
      description: "Good mobiles at cheap prices",
      width: 1,
    },
    {
      name: "Jewellery",
      description: "Good mobiles at cheap prices",
      width: 2
    },
    {
      name: "Electronics",
      description: "Good mobiles at cheap prices",
      width: 1
    },
    {
      name: "Cloths",
      description: "Good mobiles at cheap prices",
      width: 1
    },
    {
      name: "Vegetables/Fruits",
      description: "Good mobiles at cheap prices",
      width: 1
    },
  ]

  const [products, setProducts] = useState<Product>([{
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
  }]);

  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const response = await fetch('/api/products')
    const data = (await response.json()).data
    setProducts(data)
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='h-full w-full pb-10'>

      <div className='h-screen w-full px-10 flex flex-col items-center justify-center'>
        <h1 className='font-bold text-3xl'>Cholan Shop</h1>
        <Image src='/images/banner.png' alt='banner image' height={500} width={500} />
      </div>

      <div className='h-[100vh] mb-10'>
        <div>
          <h2 className='text-center pb-10 text-3xl font-bold'>Our Services</h2>
        </div>
        <div className='grid grid-cols-3 gap-5'>
          {data.map((e, i) => {
            return (
              <ServiceCard name={e.name} description={e.description} width={e.width} key={i} />
            )
          })}
        </div>
      </div>

      <div className='mb-10'>
        <div>
          <h1 className='text-center pb-10 text-3xl font-bold'>Our Products</h1>
        </div>
        {loading ? (
          <div className='bg-black mb-10 h-auto rounded-md flex gap-5 p-5 overflow-x-auto overflow-y-hidden'>
            {data.map((e) => {
              return (
                <ProductCardSkeliton />
              )
            })}
          </div>
        ) : (
          <div>

            <ProductSection products={products} category="men's clothing"/>
            <ProductSection products={products} category="women's clothing"/>
            <ProductSection products={products} category="jewelery"/>
            <ProductSection products={products} category="electronics"/>

          </div>
        )}

      </div>

    </div>
  )
}

export default page

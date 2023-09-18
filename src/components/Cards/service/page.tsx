
import Link from 'next/link'
import React from 'react'

function ServiceCard({name,description,width}:any) {
  return (
    <div className={`p-5 bg-[#facc15] rounded-md grow h-[40vh] col-span-${width}`}>
      <h1 className='font-bold text-2xl'>{name}</h1>
      <p>{description}</p>
      <Link href="/" className='underline'>View More</Link>
    </div>
  )
}

export default ServiceCard

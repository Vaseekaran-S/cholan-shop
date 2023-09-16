
import Image from 'next/image'

function page() {
  return (
    <div className='h-[89vh] w-full'>
      <div className='h-full w-full bg-gray-100 px-10 flex flex-col items-center justify-center'>
        <Image src='/images/banner.png' alt='banner image' height={500} width={500}/>
        <h1 className='font-bold text-3xl'>Cholan Shop</h1>
      </div>
    </div>
  )
}

export default page

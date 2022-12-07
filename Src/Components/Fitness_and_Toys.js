import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Fitness_and_Toys({title,productImage,link}) {
  return (
    <div className='bg-white p-6 border-2 border-red-600   w-[325px] z-30 h-[400px]  mb-2 shrink-0'>
      <p className='font-extrabold whitespace-normal text-xl'>{title}</p>
      <Image src={productImage} alt='product images'
        width={180}
        height={400}
        className = 'h-[310px] w-[350px] whitespace-nowrap'
      />
        <Link className='text-blue-500 hover:text-red-600 hover:underline' href="#">{link}</Link>
    </div>
  )
}

export default Fitness_and_Toys

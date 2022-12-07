import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Fitness_and_Toys({header,productImage,link}) {
  return (
    <div className='bg-white p-6 border-2 border-red-600  truncate-normal w-[325px] z-30 h-[400px]  mb-2 shrink-0'>
      <p className='font-extrabold  text-xl text-black'>{header}</p>
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

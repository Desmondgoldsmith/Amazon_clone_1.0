import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Product_category({link,header, productImage}) {
  return (
    <div className='bg-white p-6  w-[400px] z-30 lg:h-[400px] md:h-[400px] sm:h-[50] mb-2'>
      <p className='font-extrabold whitespace-nowrap text-xl'>{header}</p>
      <Image src={productImage} alt='product images'
        width={180}
        height={400}
        className = 'h-[310px] w-[350px]'
      />
        <Link className='text-blue-500' href="#">{link}</Link>
    </div>
  )
}

export default Product_category

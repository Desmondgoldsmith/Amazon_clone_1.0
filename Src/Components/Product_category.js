import React from 'react'
import Image from 'next/image'

function Product_category({header, productImage, productName}) {
  return (
    <div className='bg-white p-6  w-[400px] z-30 lg:h-[400px] md:h-[400px] sm:h-[50]'>
      <p className='font-extrabold whitespace-nowrap text-xl'>{header}</p>
      <Image src={productImage} alt='product images'
        width={180}
        height={400}
        className = 'h-[340px] w-[350px]'
      />
    </div>
  )
}

export default Product_category

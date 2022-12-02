import React from 'react'

function Product_category({header, productImage, productImage1, productImage2, productImage3, productImage4, productName}) {
  return (
    <div className='bg-white p-10   w-[400px] z-30 lg:h-[300px] md:h-[300px] sm:h-[50]'>
      <p className='font-extrabold whitespace-nowrap'>{header}</p>
      <Image src={} alt='product images'/>
    </div>
  )
}

export default Product_category

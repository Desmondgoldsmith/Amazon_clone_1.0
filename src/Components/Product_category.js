import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/router'

function Product_category({title,route,header, productImage}) {
  const router = useRouter()
  return (
    <div className='bg-white p-6  w-[325px] z-30 h-[400px]  mb-2 shrink-0'>
      <p className='font-extrabold whitespace-nowrap text-xl'>{header}</p>
      <Image onClick = {route} src={productImage} alt='product images'
        width={180}
        height={400}
        className = 'h-[310px] w-[350px] whitespace-nowrap cursor-pointer'
      />
        <p className='text-blue-500 cursor-pointer hover:text-red-600 hover:underline' onClick = {route}>{title}</p>
    </div>
  )
}

export default Product_category

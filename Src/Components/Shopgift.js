import React from 'react'
import Image from 'next/image'

function Shopgift({productImage}) {
  return (
    <div className='ml-4 mr-4 p-3'>
     <div className='w-[200px] h-[200px]  truncate-normal bg-white '>
       <Image src = {productImage} 
        width={100}
        height={100}
        alt="books"
        className = ""
       />
     </div>
     </div>
  )
}
export default Shopgift

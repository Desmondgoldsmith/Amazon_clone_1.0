import React from 'react'
import Image from 'next/image'

function Mixed_component({header,productImage1, productImage2, productImage3, productImage4,productName }) {
  return (
    <div className='bg-white p-10   w-[400px] z-30 lg:h-[300px] md:h-[300px] sm:h-[50]'>
        <p className='font-extrabold whitespace-nowrap'>{header}</p>
      <div className='flex'>
         <Image src={productImage1} 
        width={120}
        height={120} 
      />
         <Image src={productImage2} 
        width={120}
        height={120} 
      />
         <Image src={productImage3} 
        width={120}
        height={120} 
      />
         <Image src={productImage4} 
        width={120}
        height={120} 
      />
      </div>
     
    </div>
  )
}

export default Mixed_component

import React from 'react'
import Image from 'next/image'

function Mixed_component({header,productImage1, productImage2, productImage3, productImage4,productName1,productName2,productName3,productName4 }) {
  return (
    <div className='bg-white p-6  w-[400px] z-30 lg:h-[350px] md:h-[350px] sm:h-[50]'>
        <p className='font-extrabold whitespace-nowrap'>{header}</p>
      <div className='flex space-x-2'>
         <div className='block'>
        <Image src={productImage1} 
        width={0}
        height={0}
        className = "w-[120px] h-[120px] " 
      />
      <p className='font-bold'>{productName1}</p> 
    </div>
         <div className='block'>
            <Image src={productImage2} 
            width={0}
            height={0}
            className = "w-[120px] h-[120px] " 
         /> 
            <p className='font-bold'>{productName2}</p> 
         </div>
       </div>

       <div className='flex space-x-2'>

       <div className='block'>
        <Image src={productImage3} 
        width={0}
        height={0}
        className = "w-[120px] h-[120px] " 
      />
        <p className='font-bold'>{productName3}</p> 
       </div>

       <div className='block'>
         <Image src={productImage4} 
        width={0}
        height={0}
        className = "w-[120px] h-[120px] " 
      />
        <p className='font-bold'>{productName4}</p> 
       </div>
  
        
       </div>
    </div>
  )
}

export default Mixed_component

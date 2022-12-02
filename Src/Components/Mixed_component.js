import React from 'react'
import Image from 'next/image'

function Mixed_component({header,productImage1, productImage2, productImage3, productImage4,productName1,productName2,productName3,productName4 }) {
  return (
    <div className='bg-white p-6  w-[400px] z-30 lg:h-[400px] md:h-[400px] sm:h-[50]'>
        <p className='font-extrabold text-xl whitespace-nowrap mb-2 '>{header}</p>
      <div className='flex space-x-1 mb-2'>
         <div className='block'>
        <Image src={productImage1} 
        width={180}
        height={400}
        className = "w-[150px] h-[120px]  " 
      />
      <p className='font-bold '>{productName1}</p> 
    </div>
         <div className='block'>
            <Image src={productImage2} 
            width={180}
            height={400}
            className = "w-[150px] h-[120px]  " 
         /> 
            <p className='font-bold'>{productName2}</p> 
         </div>
       </div>

       <div className='flex space-x-1 '>

       <div className='block'>
        <Image src={productImage3} 
         width={180}
        height={400}
        className = "w-[150px] h-[120px]  " 

      />
        <p className='font-bold'>{productName3}</p> 
       </div>

       <div className='block'>
         <Image src={productImage4} 
        width={180}
        height={400}
        className = "w-[150px] h-[120px]  " 

      />
        <p className='font-bold'>{productName4}</p> 
       </div>
  
        
       </div>
    </div>
  )
}

export default Mixed_component

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Mixed_component({title,background_color,route,header,productImage1, productImage2, productImage3, productImage4,productName1,productName2,productName3,productName4 }) {
    return (
    <div className='bg-white p-6  w-[325px] z-30 h-[400px] shrink-0'>
        <p className='font-extrabold text-xl mb-2 '>{header}</p>
      <div className='flex space-x-1 mb-2 '>
         <div className={`block`}>
        <Image src={productImage1} 
        width={180}
        height={400}
        className = "w-[150px] h-[120px] cursor-pointer hover:border hover:border-blue-400 " 
      />
      <p className='font-bold text-sm '>{productName1}</p> 
    </div>
         <div className='block'>
            <Image src={productImage2} 
            width={180}
            height={400}
            className = "w-[150px] h-[120px] " 
         /> 
            <p className='font-bold text-sm'>{productName2}</p> 
         </div>
       </div>

       <div className='flex space-x-1 mb-2'>

       <div className='block'>
        <Image src={productImage3} 
         width={180}
        height={400}
        className = "w-[150px] h-[120px]  " 

      />
        <p className='font-bold text-sm'>{productName3}</p> 
       </div>

       <div className='block'>
         <Image src={productImage4} 
        width={180}
        height={400}
        className = "w-[150px] h-[120px]  " 

      />
        <p className='font-bold text-sm'>{productName4}</p> 
       </div>
  
        
       </div>
       <Link className='text-blue-500 hover:text-red-600 hover:underline' href={route}>{title}</Link>
    </div>
  )
}

export default Mixed_component

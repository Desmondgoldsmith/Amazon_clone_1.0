import React from 'react'
import Image from 'next/image'

function Top_Apparels({productImage,link}) {
  return (
    <div className='ml-2 mr-2 p-1'>
     <div onClick = {link} className='w-[150px] h-[200px]  truncate-normal bg-white '>
       <Image src = {productImage} 
        width={150}
        height={100}
        alt="books"
        className = "h-[200px] cursor-pointer"
       />
     </div>
     </div>
  )
}

export default Top_Apparels
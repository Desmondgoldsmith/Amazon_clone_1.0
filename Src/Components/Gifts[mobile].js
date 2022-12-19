import React from 'react'
import Image from 'next/image'

function Gifts({image,name,link}) {
  return (
    <div className=''>
      
        <Image onClick = {link}
         src={image}
         width={120}
         height={120}
         className ="w-[200px] cursor-pointer"
        />
        <p className = "cursor-pointer text-blue-500 hover:text-red-600 hover:underline" onClick = {link}>{name}</p>
    </div>
  )
}

export default Gifts

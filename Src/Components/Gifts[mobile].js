import React from 'react'
import Image from 'next/image'
function Gifts({image,name}) {
  return (
    <div className=' w-full'>
      
        <Image
         src={image}
         width={120}
         height={120}
         className ="w-[200px] "
        />
        <p>{name}</p>
    </div>
  )
}

export default Gifts

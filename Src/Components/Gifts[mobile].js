import React from 'react'
import Image from 'next/image'

function Gifts({image,name,link}) {
  return (
    <div className=''>
      
        <Image
         src={image}
         width={120}
         height={120}
         className ="w-[200px] "
        />
        <p onClick = {link}>{name}</p>
    </div>
  )
}

export default Gifts

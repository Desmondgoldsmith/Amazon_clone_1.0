import React from 'react'
import Image from 'next/image'

function Mobileview_Category({title,image,link}) {
  return (
    <div className='bg-white p-1 w-[150px] rounded-md shrink-0 z-30 h-[200px] '>
       <p className='font-bold truncate text-sm'>{title}</p>
       <Image onClick = {link}
       src={image}
       alt={title}
       width={100}
       height={120}
       className = "w-[200px] h-[165px] cursor-pointer"  
       />
    </div>
  )
}

export default Mobileview_Category

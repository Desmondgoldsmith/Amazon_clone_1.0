import React from 'react'
import Image from 'next/image'

function Mobileview_Category({title,image}) {
  return (
    <div className='bg-white p-1 w-[150px] shrink-0 z-30 h-[200px]   border-2 border-red-600'>
       <p>{title}</p>
       <Image 
       src={image}
       alt={title}
       width={100}
       height={120}
       className = ""  
       />
    </div>
  )
}

export default Mobileview_Category

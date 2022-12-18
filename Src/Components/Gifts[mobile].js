import React from 'react'

function Gifts({image,link}) {
  return (
    <div className='flex w-full'>
      <div  className='flex' >
        <Image
         src={image}
         width={120}
         height={120}
         className =" "
        />
        <Image
         src={image}
         width={120}
         height={120}
         className =" "
        />
      </div>
      <div className='flex'>
      <Image
         src={image}
         width={120}
         height={120}
         className =" "
        />
        <Image
         src={image}
         width={120}
         height={120}
         className =" "
        />
      </div>
    </div>
  )
}

export default Gifts

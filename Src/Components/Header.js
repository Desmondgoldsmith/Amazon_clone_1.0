import React from 'react'
import Image from 'next/image'

function Header() {
  return (
    <header>
    {/* first section */}
    <div className='flex items-center bg-amazon_blue p-1.5 flex-grow py-2 '>
       <div className='mt-2 flex item-center flex-grow sm:flex-grow-0'>
      <Image src = "https://pngimg.com/uploads/amazon/amazon_PNG25.png" 
      width={100} 
      height={10} 
      objectFit = "contain"
      className='cursor-pointer'
      />
    </div>

    {/* search bar */}
    <div>
      <input type="text"/>
    </div>
    </div>
     

{/* second div */}
    <div>

    </div>
    </header>
  )
}

export default Header
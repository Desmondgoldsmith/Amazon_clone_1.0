import React from 'react'
import Image from 'next/image'

function Header() {
  return (
    <header>
    {/* first section */}
    <div className='flex items-center bg-amazon_blue'>
       <div>
      <Image src = "https://pngimg.com/uploads/amazon/amazon_PNG25.png" 
      width={100} 
      height={10} 
      objectFit = "contain"
      className='cursor-pointer'
      />
    </div>
    </div>
     

{/* second div */}
    <div>

    </div>
    </header>
  )
}

export default Header
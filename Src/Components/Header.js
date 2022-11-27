import React from 'react'
import Image from 'next/image'

function Header() {
  return (
    <header>
    {/* first section */}
    <div className='flex items-center bg-amazon_blue'>
       <div>
      <Image src = "https://logos-world.net/wp-content/uploads/2020/04/Amazon-Symbol.jpg" 
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
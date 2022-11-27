import React from 'react'
import Image from 'next/image'
import { MenuIcon, MagnifyingGlassIcon , ShoppingCartIcon } from "@heroicons/react/24/outline"


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
    <div className='hidden sm:flex items-center rounded-md  flex-grow  cursor-pointer h-10 bg-yellow-400 hover:bg-yellow-500'>
      <input className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4' type="text"/>
      <MagnifyingGlassIcon  className = 'text-red-600 h-12 p-4'/>
    </div>
      {/* name section */}
      <div className='text-white items-center space-x-6 text-xs flex'>
         <div className='text-white items-center space-x-6 text-xs'>
    <p>Hello,Desmond Goldsmith</p>
          <p>Account & Lists</p>
    </div>
    <div >
      <p>Return</p>
      <p>& Orders</p>
    </div>
    <div className='flex items-center'>
      <ShoppingCartIcon className='h-10' />
      <p>Cart</p>
    </div>
      </div>
   

    </div>
     

{/* second div */}
    <div>

    </div>
    </header>
  )
}

export default Header
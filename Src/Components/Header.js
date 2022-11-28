import React from 'react'
import { MenuIcon, MagnifyingGlassIcon , ShoppingCartIcon } from "@heroicons/react/24/outline"
import Image from 'next/image'

function Header() {
  return (
    <header>
      <div className='bg-amazon_blue flex p-1.5 items-center flex-grow'>
       {/* left section */}
       <div className='mt-2 items-center flex-grow sm:flex-grow-0'>
         <Image src = 'https://pngimg.com/uploads/amazon/amazon_PNG25.png'
          width={100}
          height={10}
          objectFit = "contain"
          className = "cursor-pointer"
         />
       </div>
       {/* search bar */}
       <div className='hidden sm:flex flex-grow items-center bg-yellow-400 h-10 cursor-pointer ml-2 hover:bg-yellow-500 border rounded-md'>
       <select className='w-13 focus:outline-orange-400 text-center h-full text-xs bg-gray-300 text-gray-600 rounded-l-md' name="cars" id="cars">
        <option value="volvo">All</option>
        <option value="saab">Arts</option>
        <option value="mercedes">Automotive</option>
        <option value="audi">Baby</option>
        <option value="audi">Books</option>
        <option value="audi">Deals</option>
        <option value="audi">Electronics</option>
        <option value="audi">Luggage</option>
        <option value="audi">Movie</option>
        <option value="audi">Deals</option>
        <option value="audi">Deals</option>
        <option value="audi">Deals</option>
      </select>
         <input className='p-2 items-center w-6 h-full flex-grow  focus:outline-none' type="text" />
         <MagnifyingGlassIcon  className = 'h-12 p-4 font-extrabold '/>
       </div>
       {/* right section */}
      <div className='text-white text-xs flex space-x-2 items-center mx-6 whitespace-nowrap'>
      <div></div>
      <div>
        <p>Hello,Desmond Goldsmith</p>
        <p className='font-extrabold link  text-sm'>Accounts & Lists</p>
      </div>
      <div>
        <p>Returns</p>
        <p className='font-extrabold  link text-sm'>& Orders</p>
      </div>
      <div className='relative flex items-center'>
      <ShoppingCartIcon className='h-10' />
      <span className='absolute ml-4 z-50 bg-amazon_blue text-center px-0.5 mb-5 hover:no-underline text-orange-500 font-extrabold text-sm'>1</span>

      <p className='hidden sm:inline font-extrabold link text-sm'>Cart</p>
      </div>
      </div>
      </div>

{/* second nav */}
      <div>

      </div>
    </header>
  )
}

export default Header

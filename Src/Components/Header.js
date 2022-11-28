import React from 'react'
import { MenuIcon, MagnifyingGlassIcon , ShoppingCartIcon } from "@heroicons/react/24/outline"
import Image from 'next/image'

function Header() {
  return (
    <header>
      <div className='bg-amazon_blue flex p-1.5 items-center flex-grow'>
       {/* left section */}
       <div className='mt-2 items-center flex-grow sm:flex-grow-0 hover:border border border-transparent p-1 hover:border-solid hover:border-white cursor-pointer'>
         <Image src = 'https://pngimg.com/uploads/amazon/amazon_PNG25.png'
          width={100}
          height={10}
          objectFit = "contain"
          className = "cursor-pointer"
         />
       </div>
       {/* delivery location */}
       <div className='hidden lg:inline text-white ml-2 mr-2 hover:border border border-transparent p-1 hover:border-solid hover:border-white cursor-pointer'>
        <p className='text-xs pl-3'>Deliver to</p>
        <p className='flex font-extrabold'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
        Ghana
      </p>
    </div>

       {/* search bar */}
       <div className='hidden sm:flex flex-grow items-center bg-yellow-400 h-10 cursor-pointer ml-2 hover:bg-yellow-500 border rounded-md'>
       <select className='hidden md:inline w-13 focus:outline-orange-400 text-center h-full text-xs bg-gray-300 text-gray-600 rounded-l-md' name="cars" id="cars">
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
      
            {/* language section */}
      <div className='hidden lg:flex  mr-2 space-x-1 hover:border border border-transparent p-1 hover:border-solid hover:border-white cursor-pointer'>
        <Image src='https://etc.usf.edu/clipart/72500/72519/72519_28_us_c_lg.gif'
          width={30}
          height={10}
          objectFit='contain'
        />
        <p className='font-extrabold text-base flex '>EN
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
    <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
    </svg>
        </p>
      </div>
      <div className='hover:border hoverable border border-transparent p-1 hover:border-solid hover:border-white cursor-pointer'>
        <p>Hello,Desmond Goldsmith</p>
        <p className='font-extrabold link  text-sm flex '>Accounts & Lists
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
    <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
    </svg>
        </p>
      </div>
      <div className='hover:border border border-transparent p-1 hover:border-solid hover:border-white cursor-pointer'>
        <p>Returns</p>
        <p className='font-extrabold  link text-sm'>& Orders</p>
      </div>
      <div className='relative flex items-center hover:border border border-transparent p-1 hover:border-solid hover:border-white cursor-pointer'>
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

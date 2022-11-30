import React from 'react'
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"


function Searchbar() {
  return (
    <>
    
         <input className='p-2 items-center w-6 h-full flex-grow  focus:outline-none' type="text" />
         <MagnifyingGlassIcon  className = 'h-12 p-4 font-extrabold '/>
    </>
  )
}

export default Searchbar
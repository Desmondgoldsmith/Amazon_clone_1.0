import React from 'react'
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"


function Searchbar() {
  return (
    <div>
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
  )
}

export default Searchbar
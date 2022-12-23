import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Nav_dropdown() {
  return (
    <div>
      {/* dropdown */}
      <nav tabIndex={0} onKeyDown = {0} role = 'button' className="border z-50 border-gray-200 mt-2.5 bg-gray-100 invisible rounded w-60  absolute left-0 top-full transition-all opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-1">
            <ul className="py-1 text-black p-3 space-y-3">
                <li className='flex items-center'>
                   <p className='font-bold'>Change language</p>
                    <Link href="#" className="block px-4 py-2 hover:bg-gray-100 hover:underline hover:text-blue-400">
                        learn more 
                    </Link>
                </li>


                <li className='flex items-center space-x-2'>
                <input className='accent-yellow-500' type="radio" id="" name="english" value="English" />
                <label className='text-base'>English - EN</label>
                </li>

                <li>
                  <hr className='mt-2 mb-2  border-1'/>
                </li>

                <li className='flex items-center space-x-2'>
                <input className='accent-yellow-500  ' type="radio" id="" name="spanish" value="Spanish" />
                <label className = 'hover:underline hover:text-yellow-500 text-base' >español - ES</label>
                </li>
               
                <li className='flex items-center space-x-2'>
                <input className='accent-yellow-500 ' type="radio" id="" name="arabic" value="Arabic" />
                <label className = 'hover:underline hover:text-yellow-500 text-base' >العربية - AR</label>
                </li>
               
                <li className='flex items-center space-x-2'>
                <input className='accent-yellow-500 ' type="radio" id="" name="deutsche" value="Deutsche" />
                <label className = 'hover:underline hover:text-yellow-500 text-base' >Deutsch - DE</label>
                </li>
                
                

            </ul>
        </nav>
    </div>
  )
}

export default Nav_dropdown

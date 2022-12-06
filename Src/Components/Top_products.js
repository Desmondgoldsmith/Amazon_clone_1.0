import React from 'react'
import Shopgift from './Shopgift'

function Top_products() {
  return (
    <div className='border-2  border-red-600 h-[250px] ml-8 mr-11 mb-20 bg-white '> 
     <p className='pl-8'>This is the Title</p>
    <div className='flex  overflow-x-scroll scrollbar-hide'>
   <div className = "text-dark">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clipRule="evenodd" />
  </svg>
   </div>
  
      <Shopgift/>
      <Shopgift/>
      <Shopgift/>
      <Shopgift/>
      <Shopgift/>
      <Shopgift/>
      <Shopgift/>
      <Shopgift/>    
    </div>
      </div>
   
  )
}

export default Top_products
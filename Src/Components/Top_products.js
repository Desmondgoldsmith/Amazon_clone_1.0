import React from 'react'
import Shopgift from './Shopgift'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'
function Top_products() {
  return (
    <div>
     <div className='border-2  border-red-600 h-[250px] ml-8 mr-11 mb-20 bg-white '>
  <p className='pl-8'>This is the Title</p>
    <div className='flex  overflow-x-scroll scrollbar-hide'>
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
      <div>
        
      </div>
   
    </div>
  )
}

export default Top_products
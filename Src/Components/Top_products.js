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
      <div><Carousel
       autoPlay
       infiniteLoop
       showStatus = {false}
       showIndicators = {false}
       showThumbs = {false}
       interval = {5000}

       className = ' sm:h-50  '
      >
       
     <div>
        <img className='border-2 border-red-600 w-[50px] h-[50px]' loading='lazy' src='https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_2x._SY608_CB434924743_.jpg' alt='banner1'/>
     </div>
     <div>
        <img  className='border-2 border-red-600 w-[50px] h-[50px]' loading='lazy' src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Returns_2x._SY608_CB432774709_.jpg"' alt='banner2'/>
     </div>
     
    
      </Carousel>

      </div>
   
    </div>
  )
}

export default Top_products
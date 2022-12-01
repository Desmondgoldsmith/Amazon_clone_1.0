import React from 'react'
import { Carousel } from 'react-responsive-carousel'

function Banner() {
  return (
    <div className='relative'>
      <Carousel
       autoPlay
       infiniteLoop
       showStatus = {false}
       showIndicators = {false}
       showThumbs = {false}
       interval = {5000}
      >
     <div>
        <img loading='lazy' src='https://raw.githubusercontent.com/Desmondgoldsmith/Amazon_clone_1.0/main/public/71dbxIcDioL-_SX3000_.jpg' alt='banner1'/>
     </div>
     <div></div>
     <div></div>
      </Carousel>
    </div>
  )
}

export default Banner
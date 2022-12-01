import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
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
     <div>
        <img loading='lazy' src='https://raw.githubusercontent.com/Desmondgoldsmith/Amazon_clone_1.0/main/public/41J4WL-j4OL-_SX1500_.jpg' alt='banner2'/>
     </div>
     <div>
        <img loading='lazy' src='https://raw.githubusercontent.com/Desmondgoldsmith/Amazon_clone_1.0/main/public/51x7E2BAaRL-_SX1500_.jpg' alt='banner2'/>
     </div>
     <div>
        <img loading='lazy' src='https://raw.githubusercontent.com/Desmondgoldsmith/Amazon_clone_1.0/main/public/41Mz2pC1MzL-_SX1500_.jpg' alt='banner3'/>
     </div>
     <div>
        <img loading='lazy' src='https://raw.githubusercontent.com/Desmondgoldsmith/Amazon_clone_1.0/main/public/61BvxKSpy3L-_SX3000_.jpg' alt='banner3'/>
     </div>
     <div>
        <img loading='lazy' src='https://raw.githubusercontent.com/Desmondgoldsmith/Amazon_clone_1.0/main/public/61shpu9mvML-_SX3000_.jpg' alt='banner3'/>
     </div>
    
      </Carousel>
    </div>
  )
}

export default Banner
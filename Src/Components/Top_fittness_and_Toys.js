import React from 'react'
import Fitness_and_Toys from './Fitness_and_Toys'

function Top_fittness_and_Toys() {
  return (
    <div className='hidden lg:flex md:flex z-30 space-x-5 ml-8 mr-8 whitespace-nowrap overflow-x-scroll scrollbar-hide '>
      <Fitness_and_Toys  title = "For your Fitness Needs" productImage=""/>
      <Fitness_and_Toys title = "Shop activity trackers and smartwatches" productImage=""/>
      <Fitness_and_Toys title = "New arrivals in Toys" productImage=""/>
      <Fitness_and_Toys title = "Gifts for every stocking" productImage=""/>
    </div>
  )
}

export default Top_fittness_and_Toys

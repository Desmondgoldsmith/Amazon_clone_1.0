import React from 'react'
import Fitness_and_Toys from './Fitness_and_Toys'

function Top_fittness_and_Toys() {
  return (
    <div className='hidden lg:flex md:flex z-30 space-x-5 ml-8 mr-8 whitespace-nowrap overflow-x-scroll scrollbar-hide '>
      <Fitness_and_Toys  title = "For your Fitness Needs" productImage="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Fitness_1X._SY304_CB639748186_.jpg"/>
      <Fitness_and_Toys title = "Shop activity trackers and smartwatches" productImage="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_1X._SY304_CB639922137_.jpg"/>
      <Fitness_and_Toys title = "New arrivals in Toys" productImage="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Toys_1X._SY304_CB639759658_.jpg"/>
      <Fitness_and_Toys title = "Gifts for every stocking" productImage=""/>
    </div>
  )
}

export default Top_fittness_and_Toys

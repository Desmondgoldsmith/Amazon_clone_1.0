import React from 'react'
import Gifts from './Gifts[mobile]'
import ProductTrends from './ProductTrends[mobile]'

function ShoppingTrends({Trends}) {
     
  return (
    <div>
       <div className = "block md:hidden lg:hidden w-fill p-2  bg-white">
        <h1 className = "text-[18px] font-extrabold">Inspired by your shopping products</h1>
       <hr className='mt-2 mb-2'/>
        {/* dixplay products */}
      <div className = "block md:block lg:flex  flex-wrap space-y-4 md:space-y-4 lg:-space-y-0 lg:space-x-4 p-0 md:p-2 lg:p-2 ">
        { Trends.slice(0,3).map(({title,price,description,category,image,id})=>(
        <ProductTrends title={title} price={price} description={description} category={category} image = {image} id={id} key = {id}/>
        ))}
      </div>
       </div>
       
         {/* another component */}
       <div className = "block md:hidden lg:hidden w-fill p-2 mt-2 bg-white">
        <h1 className = "text-[18px] font-extrabold">More top picks for you</h1>
       <hr className='mt-2 mb-2'/>
        {/* dixplay products */}
      <div className = "block md:block lg:flex  flex-wrap space-y-4 md:space-y-4 lg:-space-y-0 lg:space-x-4 p-0 md:p-2 lg:p-2 ">
        { Trends.slice(4,7).map(({title,price,description,category,image,id})=>(
        <ProductTrends title={title} price={price} description={description} category={category} image = {image} id={id} key = {id}/>
        ))}
      </div>
       </div>

       {/* gifts for everyone */}
       <div className = " w-full border-2 border-red-600 grid gap-4 grid-cols-2 p-2 ">
       <Gifts image = "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/HOL22/GW/QuadCards/DT/HOL22_GW_DT_QuadCard_1_Electronics_1x._SY116_CB608522082_.jpg" name ="Electronics"/>
        <Gifts image = "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/HOL22/GW/QuadCards/DT/HOL22_GW_DT_QuadCard_2_Home_2x._SY232_CB608522082_.jpg" name ="Home"/>
       <Gifts image = "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/HOL22/GW/QuadCards/DT/HOL22_GW_DT_QuadCard_3_Fashion_2x._SY232_CB608522082_.jpg" name ="Fashion"/>
        <Gifts image = "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/HOL22/GW/QuadCards/DT/HOL22_GW_DT_QuadCard_4_Beauty_2x._SY232_CB608522082_.jpg" name ="Beauty"/>
         </div>
    </div>
  )
}

export default ShoppingTrends

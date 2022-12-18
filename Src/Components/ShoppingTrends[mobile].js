import React from 'react'
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
       <hr className =""/>
       {/* another component */}
       <div className = "block md:hidden lg:hidden w-fill p-2  bg-white">
        <h1 className = "text-[18px] font-extrabold">More top picks for you</h1>
       <hr className='mt-2 mb-2'/>
        {/* dixplay products */}
      <div className = "block md:block lg:flex  flex-wrap space-y-4 md:space-y-4 lg:-space-y-0 lg:space-x-4 p-0 md:p-2 lg:p-2 ">
        { Trends.slice(4,7).map(({title,price,description,category,image,id})=>(
        <ProductTrends title={title} price={price} description={description} category={category} image = {image} id={id} key = {id}/>
        ))}
      </div>
       </div>
    </div>
  )
}

export default ShoppingTrends

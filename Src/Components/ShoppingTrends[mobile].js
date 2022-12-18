import React from 'react'

function ShoppingTrends({products}) {
  return (
    <div>
       <div className = "w-fill p-2 border-2 border-red-600 bg-white">
        <h1 className = "text-[18px] font-extrabold">Inspired by your shopping trends</h1>
       <hr className='mt-2 mb-2'/>
        {/* dixplay products */}
      {/* <div className = "block md:block lg:flex  flex-wrap space-y-4 md:space-y-4 lg:-space-y-0 lg:space-x-4 p-0 md:p-2 lg:p-2 ">
        {products.map(({title,price,description,category,image,id})=>(
        <ProductList title={title} price={price} description={description} category={category} image = {image} id={id} key = {id}/>
        ))}
      </div> */}

       </div>
    </div>
  )
}

export default ShoppingTrends
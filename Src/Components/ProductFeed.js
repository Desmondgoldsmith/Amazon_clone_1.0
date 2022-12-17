import React,{useState} from 'react'
import ProductList from "./ProductList"

function ProductFeed({products}) {

 
  return ( 
           <div className = "w-[1000px] p-2">
        <h1 className = "text-[20px] font-extrabold">RESULTS</h1>
        <p className= "text-xs">Price and other details may vary based on product size and color.</p>
       <hr className='mt-2 mb-2'/>
        {/* dixplay products */}
      <div className = "block md:block lg:flex  flex-wrap space-x-4 p-0 md:p-2 lg:p-2 ">
        {products.map(({title,price,description,category,image,id})=>(
        <ProductList title={title} price={price} description={description} category={category} image = {image} id={id} key = {id}/>
        ))}
      </div>

       </div>
  )
}



export default ProductFeed

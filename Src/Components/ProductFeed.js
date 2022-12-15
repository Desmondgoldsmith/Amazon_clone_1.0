import React from 'react'
import Image from 'next/image'

function ProductFeed({products}) {
  return (
    <div>
           
           <div className = "w-[1000px] p-2">
        <h1 className = "text-[20px] font-extrabold">RESULTS</h1>
        <p>Price and other details may vary based on product size and color.</p>
        {/* dixplay products */}
        {products.map((product)=>(
        <div className='w-[200px]'>
          <Image 
          src = "https://m.media-amazon.com/images/I/51LS7arqYHL._AC_SY200_.jpg"
          alt = "product images"
          width = {150}
          height ={100}
          className ="w-[200px] h-[220px]"
          />
          <div className = "p-1">
            <p className = "text-[16px] font-semibold">{product.title}</p>
          <div className = "text-yellow-500">
            <p className = "cursor-pointer text-[13px] ">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
            </svg>
          </p> 
        </div>
        <p>$<span className = "font-extrabold text-[18px]">54.99</span></p>   
        <button className ="p-2 w-[190px] rounded-md bg-yellow-500 hover:bg-yellow-600">Add to cart</button>
        
          </div>
          </div>
          ))}
       </div>
       
    </div>
  )
}



export default ProductFeed

import Image from 'next/image'
import React from 'react'
import {useDispatch} from 'react-redux'
import {addToCart} from '../Slices/Cartslice'

function ProductTrends({title,price,description,category,image,id}) {
  const dispatch = useDispatch()
  const addCart = () => {
    const product = {
      title,
      price,
      description,
      category,
      image,
      id
    }
   dispatch(addToCart(product))
  }
  return (
    <div>
        <div className='flex md:hidden lg:hidden space-x-2 w-full items-center'>
         <div className='p-1 '>
          <Image 
          src = {image}
          alt = "product images"
          width = {150}
          height ={100}
          className ="w-[130px] h-[130px]"
          />
         </div>
          
          <div className = "p-2 w-full">
              <p className = "block md:block lg:hidden text-[16px] font-semibold cursor-pointer truncate whitespace-normal  hover:overflow-visible hover:whitespace-normal hover:ease-in hover:duration-300">{title}</p>
        <p>$<span className = "font-extrabold text-[18px]">{price}</span></p>   
        <button onClick = {(e)=>addCart(e)} className ="p-2 w-[180px]  rounded-md bg-yellow-500 hover:bg-yellow-600">Add to cart</button>
          </div>
          </div>

    </div>
  )
}

export default ProductTrends
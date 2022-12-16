import React from 'react'
import {useDispatch} from 'react-redux'
import {removeFromCart, selectItems} from "../Slices/Cartslice"
import { useSelector } from 'react-redux'

function CartItems({title,price,description,category,image,id}) {
  const items = useSelector(selectItems) //getting the contents of the items in the "item" array
  const dispatch = useDispatch() //creating an object of the useDispatch func
  const removeItem = () =>{
    dispatch(removeFromCart({id}))
  }
  return (
    <div>
              {/* // cart items */}
              <div className = " mt-4 flex space-x-4 mb-4 ">
            <div className = "">
              <img src={image}
               alt="cart image" 
               className = "w-[200px]"
               />
            </div>
            <div className='mb-4 space-y-3'>
              <div className='flex'>
                  <div className =" w-[800px]">
                  <p className='text-[20px]'>{title}</p>
                  <p className='text-green-600 text-[13px]'>In Stock</p>
                  <p className = "text-[13px]">Gift options not available.<span className = "text-blue-500">Learn more</span> </p>
                  <p className = "text-[13px]">{description} </p>
                  <p className='text-[13px]'><span className='font-bold'>Style:</span> {category}</p>
                  </div>
                  <div className=' w-[140px] -mr-2'>
                    <p className = "text-[20px] text-right font-extrabold">${price}</p>
                  </div>
              </div>
             
              <div className = "flex items-center space-x-4 cursor-pointer">
              {/* increase qty of product in cart */}
                <button onClick={()=>increaseQty()} className='bg-gray-200 outline-none border border-gray-200 p-2 rounded-md' name="" id="">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clipRule="evenodd" />
          </svg>
                </button>

                <p className ="text-[14px]">| <span  onClick = {()=>removeItem()} className  = "text-blue-500 hover:underline cursor-pointer">delete</span> |</p>
                <p className ="text-[14px]"> <span className  = "text-blue-500 hover:underline cursor-pointer"> save for later</span> |</p>
                <p className ="text-[14px]"> <span className  = "text-blue-500 hover:underline cursor-pointer"> compare with similar items</span> |</p>
              </div>
            </div>
              
             
            </div>
             
              <hr/>
    </div>
  )
}

export default CartItems

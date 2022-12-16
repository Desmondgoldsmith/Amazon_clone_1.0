import React from 'react'
import useDispatch from 'react-redux'

function CartItems({title,price,description,category,image,id}) {
  const dispatch = useDispatch() //creating an object of the useDispatch func
  const removeItem = () =>{
    dispatch()
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
                <select className='bg-gray-200 outline-none border border-gray-200 p-2 rounded-md' name="" id="">
                  <option value="Qty:1">Qty:1</option>
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                  <option value="">5</option>
                  <option value="">6</option>
                  <option value="">7</option>
                  <option value="">8</option>
                  <option value="">9</option>
                  <option value="">10+</option>
                </select>

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

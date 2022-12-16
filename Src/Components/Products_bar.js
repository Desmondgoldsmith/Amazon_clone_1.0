import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {removeFromCart, selectItems} from  '../Slices/Cartslice'
import Image from 'next/image'

function Products_bar({id}) {
    const dispatch = useDispatch()
    const items = useSelector(selectItems)

    // deleteItem from cart
    const deleteItem = () => {
        dispatch(removeFromCart({id}))
      }
  return (
    <div className='border border-l-black'>
        {/* sidebar */}
        <div className = "w-[160px] p-2 text-center ">
    {/* if cart items is less than 0 show cart empty else .... */}
    {items.length == 0 ? 
    <p className= "font-bold text-[18px]">Cart is empty !</p>
    :
    <div>
    <p className ="text-sm font-bold">Subtotal</p>
    <p className = "text-red-900 font-bold">$200</p>
    <button onClick = {()=>router.push('/Cart')} className = "w-[140px] p-2 rounded-lg bg-gray-300">Go to cart</button>
    {/* cart products preview */}
    {items.map((item)=>(
    <div className = "mt-5 mb-2">
    <Image
          src = {item.image}
          width ={50}
          height = {50}
          className = "w-[150px] h-[150px]"
        />
        <p className = "text-base font-bold text-center">$ {item.price}</p>
        <div className ="flex space-x-1">
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
          <button onClick={()=>deleteItem()} className = "rounded-md bg-gray-200 p-2 ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clipRule="evenodd" />
      </svg>
      
          </button>

          
        </div>
    </div>
    ))}
    </div>
    }
    </div>
    </div>
  )
}

export default Products_bar
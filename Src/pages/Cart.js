import React from 'react'
import Header from '../Components/Header'
import {useSelector} from "react-redux"
import {selectItems} from "../Slices/Cartslice"
import Image from 'next/image'
import CartItems from "../Components/CartItems"
import { useSession } from 'next-auth/react'

function Cart() {
  const [session] = useSession()
  const items = useSelector(selectItems)
  return (
    <div className = "bg-gray-200 h-fit ">
      <Header />   
      {/* display this when cart is empty */} 
      {items.length == 0 ? 
      <div className ="flex bg-white ml-5 mr-5 mt-5 p-3 space-x-20 w-[1150px]">
            <div>
             <Image
             src = "https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg"
             width = {100}
             height = {100}
             className = "w-[300px] h-[300px]"
             />
            </div>
            <div>
            <p className  = 'text-[23px] font-bold pt-10'>Your Amazon Cart is empty</p>
            <p className ="text-[12px] cursor-pointer text-blue-500 hover:underline hover:text-red-500">Shop today's deals</p>
            <button className = "bg-yellow-400 p-2 rounded-md w-[300px] pt-3">sign into your account</button>
            </div>
            </div>
          :

      <div className = "flex mt-[20px] ml-4 mr-4">
      {/* cart product section */}
        <div className = "w-[1150px] mr-5 bg-white p-3 mb-5">
           {/* {items.length == 0 ? } */}
            <p className = "text-[25px]">Shopping Cart</p>
            <p className = "text-right text-[13px] font-bold text-gray-500">price</p>
            <hr/>
            {items.map((item , i) => (
            <CartItems title={item.title} price={item.price} description={item.description} category={item.category} image = {item.image} id={item.id} key = {i}/>
             ))}
              
              {/* sub total */}
              <p className='text-[20px] text-right'>Subtotal(1 item): <span className='font-extrabold'>$20.000 </span> </p>
        </div>
        {/* total price section */}
        {/* prevent user form proceeding to checkout if ! signed in  */}
        
        <div className = "w-[240px] bg-white p-2 h-[120px]">
        <p className='text-[18px]'>Subtotal(1 item): <span className='font-extrabold'>$20.000 </span> </p>
        <button className = "w-[220px] bg-yellow-300 p-2 rounded-lg hover:bg-yellow-500">{!session ? "sign-in first" :  "proceed to checkout"}</button>
        </div>
     
      </div>
    }
    </div>
  )
}

export default Cart

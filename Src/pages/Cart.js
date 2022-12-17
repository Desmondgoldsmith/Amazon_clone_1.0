import React from 'react'
import Header from '../Components/Header'
import {useSelector} from "react-redux"
import {selectItems, sumTotal} from "../Slices/Cartslice"
import Image from 'next/image'
import CartItems from "../Components/CartItems"
import { useSession, signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import EmptyCart from '../Components/EmptyCart'

function Cart() {
  const {data:session} = useSession() //get the actual session state at the moment ie. if the user is logged in or out
  const items = useSelector(selectItems) 
  const router = useRouter() //for routing purposes
  const sum = useSelector(sumTotal)// sum total price of items in cart


  return (
    <div className = "bg-gray-200 h-fit ">
      <Header />   
      {/* display this when cart is empty */} 
      {items.length == 0  
      ?<EmptyCart />
       : <div className = "flex mt-[20px] ml-4 mr-4">
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
              <p className='text-[20px] text-right'>Subtotal(1 item): <span className='font-extrabold'>${sum} </span> </p>
        </div>
        {/* total price section */}
        {/* prevent user form proceeding to checkout if ! signed in  */}
        
        <div className = "w-[240px] bg-white p-2 h-[120px]">
        <p className='text-[18px]'>Subtotal(1 item): <span className='font-extrabold'>${sum} </span> </p>
          <button disabled = {!session} className = {`w-[220px] ${!session ? `bg-gray-300 cursor-not-allowed` : `bg-yellow-300 hover:bg-yellow-500` }  p-2 rounded-lg `}>{!session ? "sign-in first" :  "proceed to checkout"}</button>
        </div>
     
      </div>
    }
    </div>
  )
}

export default Cart

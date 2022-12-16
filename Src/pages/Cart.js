import React from 'react'
import Header from '../Components/Header'
import {useSelector} from "react-redux"
import {selectItems, sumTotal} from "../Slices/Cartslice"
import Image from 'next/image'
import CartItems from "../Components/CartItems"
import { useSession, signIn } from 'next-auth/react'
import { useRouter } from 'next/router'

function Cart() {
  const {data:session} = useSession() //get the actual session state at the moment ie. if the user is logged in or out
  const items = useSelector(selectItems) 
  const router = useRouter() //for routing purposes
  const sum = useSelector(sumTotal)// sum total price of items in cart


  return (
    <div className = "bg-gray-200 h-fit ">
      <Header />   
      {/* display this when cart is empty */} 
      {items.length == 0 ? 
      <div className ="flex bg-white ml-5 mr-5 mb-5 border-2 border-red-600 mt-5 p-3 space-x-20 w-[1150px]">
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
            <button onClick={!session ? signIn : ()=>router.push("/All_products")} className = {`bg-yellow-400 p-2 rounded-md w-[300px] pt-3`}>{!session ? "sign into your account" : "View products"}</button>
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

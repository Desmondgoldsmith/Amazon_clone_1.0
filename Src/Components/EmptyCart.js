import React from 'react'
import {useSession , signIn } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/router'

function EmptyCart() {
    const {data:session} = useSession()
    const router = useRouter()
  return (
    <div>
      <div className ="block lg:flex md:flex  bg-white mx-0 my-2 md:mx-5 md:my-5 lg:mx-5 lg:my-5 p:2 lg:p-3 md:p-3  space-x-0 md:space-x-20 lg:space-x-20 w-full md:w-[1150px] lg:w-[1150px]">
            <div className='border-2 border-red-600 flex flex-col justify-center items-center lg:flex lg:flex-none lg:justify-self-auto lg:items-auto md:flex md:flex-none md:justify-self-auto md:items-auto'>
             <Image
             src = "https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg"
             width = {100}
             height = {100}
             className = " border-2 border-red-600 rounded-full lg:rounded-none md:rounded-none w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] md:w-[300px] md:h-[300px]"
             />
            </div>
            <div className = "pl-2 pr-4 ">
            <p className  = 'text-[23px] font-bold pt-10 w-full lg:w-none md:w-none text-center'>Your Amazon Cart is empty</p>
            <p className ="text-[12px] text-center lg:text-justify md:text-justify cursor-pointer  text-blue-500 hover:underline hover:text-red-500">Shop today's deals</p>
            <button onClick={!session ? signIn : ()=>router.push("/All_products")} className = {`bg-yellow-400 p-2 rounded-md w-full mb-3 lg:w-[300px] md:w-[300px] pt-3`}>{!session ? "sign into your account" : "View products"}</button>
            </div>
            </div>
            <div className = "bg-white mt-5 mb-5 mx-5 p-10 w-full md:w-[1150px] lg:w-[1150px]"></div>

            <p className ="text-xs mb-5 w-full md:w-[1150px] lg:w-[1150px] ml-5 mr-5">The price and availability of items at Amazon.com are subject to change. The Cart is a temporary place to store a list of your items and reflects each item's most recent price. Shopping Cart <span className = "text-blue-500 hover:text-red hover:underline cursor-pointer"> Learn more </span>
              Do you have a gift card or promotional code? We'll ask you to enter your claim code when it's time to pay.</p>
              <div className = " mt-5 mb-5 mx-5 p-3"></div>
    </div>
  )
}

export default EmptyCart

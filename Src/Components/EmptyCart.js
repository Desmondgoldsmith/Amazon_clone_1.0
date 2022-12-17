import React from 'react'
import {useSession , signIn } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/router'

function EmptyCart() {
    const {data:session} = useSession()
    const router = useRouter()
  return (
    <div>
      <div className ="flex bg-white ml-5 mr-5 my-5 border-2 border-red-600  p-3 space-x-20 w-[1150px]">
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
            <div className = "bg-white my-5 mx-5 p-5"></div>
    </div>
  )
}

export default EmptyCart

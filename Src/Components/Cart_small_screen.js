import { useSession } from 'next-auth/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectItems, sumTotal } from '../Slices/Cartslice'
import CartItems from './CartItems'

function Cart_small_screen() {
    const {data:session} = useSession()
    const sum = useSelector(sumTotal) // sum total price of items in cart
    const items = useSelector(selectItems)
  return (
    <div className = "w-full">
         <div className = "block md:hidden lg:hidden  ">
           {/* total price section */}
        {/* prevent user form proceeding to checkout if ! signed in  */}
        
        <div className = "w-full bg-white p-2  pt-4 mb-[20px]">
        <p className='text-[23px] mb-5'>Subtotal({items.length} item): <span className='font-extrabold'>${sum} </span> </p>
         <hr className='mb-5'/>
          <button disabled = {!session} className = {`w-full mb-5 ${!session ? `bg-gray-300 cursor-not-allowed` : `bg-yellow-300 hover:bg-yellow-500` }  p-2 rounded-lg `}>{!session ? "sign-in to checkout" :  "proceed to checkout"}</button>
        </div>


      {/* cart product section */}
        <div className = "w-full bg-white p-1 mb-5">
           {/* {items.length == 0 ? } */}
            <p className = "text-[25px] mb-2">Shopping Cart</p>
            <hr/>
            {items.map((item , i) => (
            <CartItems title={item.title} price={item.price} description={item.description} category={item.category} image = {item.image} id={item.id} key = {i}/>
             ))}
              
        </div>
       
     
      </div>
    </div>
  )
}

export default Cart_small_screen
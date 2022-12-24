import React from 'react'
import Header from '../src/Components/Header'
import {useSelector} from "react-redux"
import {selectItems, sumTotal} from "../src/Slices/Cartslice"
import CartItems from "../src/Components/CartItems"
import { useSession } from 'next-auth/react'
import EmptyCart from '../src/Components/EmptyCart'
import Cart_small_screen from '../src/Components/Cart_small_screen'
import Footer_1 from '../src/Components/Footer_1'
import Footer_2 from '../src/Components/Footer_2'
import Footer from '../src/Components/Footer[mobile_1]'
import MobileFooter2 from '../src/Components/MobileFooter2'
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios'

const stripePromise = loadStripe(process.env.stripe_public_key)

function Cart() {
  const {data:session} = useSession() //get the actual session state at the moment ie. if the user is logged in or out
  const items = useSelector(selectItems) 
  const sum = useSelector(sumTotal)// sum total price of items in cart
  
  const createCheckoutSession = async ()  =>{
    const stripe = await stripePromise
    //create a checkout session by passing the cart data to Checkout_session.js [backend]
    const checkoutSession = await axios.post("/api/Checkout_Session",
   { items : items,
    email : session.user.email}
    );

    // redirrect users to checkout
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id
    })

    if(result.error){
      alert(result.error.message)
    }
  }

  return (
    <div className = "bg-gray-200 h-fit w-full">
      <Header />   
      {/* display when cart is empty else display items in cart */}
      {items.length == 0  
      ?<EmptyCart />
      : 
      <div>
       <div className = "hidden md:flex lg:flex mt-[20px] ml-4 mr-4">
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
              <p className='text-[20px] text-right'>Subtotal({items.length} item): <span className='font-extrabold'>${sum} </span> </p>
        </div>
        {/* total price section */}
        {/* prevent user form proceeding to checkout if ! signed in  */}
        
        <div className = "w-[240px] bg-white p-2 h-[120px]">
        <p className='text-[18px]'>Subtotal({items.length} item): <span className='font-extrabold'>${sum} </span> </p>
          <button onClick = {createCheckoutSession} role = "link" disabled = {!session} className = {`w-[220px] ${!session ? `bg-gray-300 cursor-not-allowed` : `bg-yellow-300 hover:bg-yellow-500` }  p-2 rounded-lg `}>{!session ? "sign-in to checkout" :  "proceed to checkout"}</button>
        </div>
     
      </div>
     <Cart_small_screen link = {createCheckoutSession}/>
     </div>
    }

    {/* footers large and medium screens */}
    <Footer_1/>
    <Footer_2/>

    {/* footers small screens */}
    <Footer/>
    <MobileFooter2/>
    </div>
  )
}
// stripe listen --forward-to localhost:3000/api/webhook
export default Cart

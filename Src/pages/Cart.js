import React from 'react'
import Header from '../Components/Header'

function Cart() {
  return (
    <div className = "bg-gray-300">
      <Header />

      <div className = "flex mt-[25px]">
      {/* cart product section */}
        <div className = "w-[1150px] bg-white border-2 border-black">
            <p>Shopping Cart</p>
            <hr/>
        </div>
        {/* total price section */}
        <div className = "w-[240px] bg-white border-2 border-red-600">
          <p>Subtotal</p>
        </div>
      </div>
    </div>
  )
}

export default Cart

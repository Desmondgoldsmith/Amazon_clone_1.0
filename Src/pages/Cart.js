import React from 'react'
import Header from '../Components/Header'

function Cart() {
  return (
    <div>
      <Header />

      <div>
      {/* cart product section */}
        <div className = "w-[1200px] bg-white border-2 border-black">
            <p>Shopping Cart</p>
            <hr/>
        </div>
        {/* total price section */}
        <div className = "bg-white border-2 border-red-600"></div>
      </div>
    </div>
  )
}

export default Cart

import React from 'react'
import Header from '../Components/Header'

function Cart() {
  return (
    <div>
      <Header />

      <div>
      {/* cart product section */}
        <div className = "w-[400px] bg-white">
            <p>Shopping Cart</p>
            <hr/>
        </div>
        {/* total price section */}
        <div></div>
      </div>
    </div>
  )
}

export default Cart

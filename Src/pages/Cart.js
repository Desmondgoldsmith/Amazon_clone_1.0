import React from 'react'
import Header from '../Components/Header'

function Cart() {
  return (
    <div className = "bg-gray-200">
      <Header />

      <div className = "flex mt-[20px] ml-4 mr-4">
      {/* cart product section */}
        <div className = "w-[1150px] mr-5 bg-white ">
            <p>Shopping Cart</p>
            <hr/>
        </div>
        {/* total price section */}
        <div className = "w-[240px] bg-white ">
          <p>Subtotal</p>
        </div>
      </div>
    </div>
  )
}

export default Cart

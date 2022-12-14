import React from 'react'
import Header from '../Components/Header'

function Cart() {
  return (
    <div className = "bg-gray-200">
      <Header />

      <div className = "flex mt-[20px] ml-4 mr-4">
      {/* cart product section */}
        <div className = "w-[1150px] mr-5 bg-white p-3">
            <p className = "text-[25px]">Shopping Cart</p>
            <p className = "text-right text-[13px] font-bold text-gray-500">price</p>
            <hr/>
            {/* // cart items */}
            <div className = " mt-4">
            <div>
              <img src="https://m.media-amazon.com/images/I/51LS7arqYHL._AC_SY200_.jpg"
               alt="cart image" 
               className = "w-[200px]"
               />
            </div>
            <div>
              <p className='font-[15px]'>This is the product name and everything ypu are suppoded to know about the  product</p>
            </div>
              
            </div>
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

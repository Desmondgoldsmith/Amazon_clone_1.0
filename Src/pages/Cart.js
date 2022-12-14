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
            <div className = " mt-4 flex space-x-4">
            <div className = "">
              <img src="https://m.media-amazon.com/images/I/51LS7arqYHL._AC_SY200_.jpg"
               alt="cart image" 
               className = "w-[200px]"
               />
            </div>
            <div>
              <p className='text-[20px]'>This is the product name and everything ypu are suppoded to know about the  product and blah .. blah ... blah ...  blah .... blahhhhhhhhhh</p>
              <p className='text-green-600 text-[13px]'>In Stock</p>
              <p className = "text-[13px]">Gift options not available.<span className = "text-blue-500">Learn more</span> </p>
              <p className='text-[13px]'><span className='font-bold'>Style:</span> Book</p>
              <div>
                <select className='bg-gray-300 outline-none border border-gray-300 p-2 rounded-md' name="" id="">
                  <option value="">Qty:1</option>
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                  <option value="">5</option>
                  <option value="">6</option>
                  <option value="">7</option>
                  <option value="">8</option>
                  <option value="">9</option>
                  <option value="">10</option>
                </select>
              </div>
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
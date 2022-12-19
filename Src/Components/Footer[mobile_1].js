import React from 'react'

function Footer() {
  return (
    <div className = "w-full block md:hidden lg:hidden p-5 text-white bg-amazon_blue-light grid gap-3 grid-cols-2">
        <div>
        <p className = "">Amazon.com</p>
        <p className = "">Your Lists</p>
        <p className = "">Find a Gift</p>
        <p className = "">Browsing History</p>
        <p className = "">Returns</p>
        </div>      
        <div>
        <p className = "">Your Orders</p>
       <p className = ""> Gift Cards & Registry</p>
        <p className = "">Your Account</p>
        <p className = "">Sell products on Amazon</p>
        <p className = "">Your Recalls and Product Safety Alerts</p>
        <p className = "">Customer Service</p>

        </div>      
    </div>
  )
}

export default Footer

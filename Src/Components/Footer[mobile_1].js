import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <div className = "w-full  md:hidden lg:hidden p-3 text-white bg-amazon_blue-light grid gap-3 grid-cols-2">
        <div className ="p-2  space-y-2">
        <p className = "text-sm"><Link href="/#">Amazon.com</Link></p>
        <p className = "text-sm"><Link href="/#">Your Lists</Link></p>
        <p className = "text-sm"><Link href="/#">Find a Gift</Link></p>
        <p className = "text-sm"><Link href="/#">Browsing History</Link></p>
        <p className = "text-sm"><Link href="/#">Returns</Link></p>
        </div>      
        <div className ="p-2 space-y-2">
        <p className = "text-sm"><Link href="/#">Your Orders</Link></p>
       <p className = "text-sm"><Link href="/#"> Gift Cards & Registry</Link></p>
        <p className = "text-sm"><Link href="/#">Your Account</Link></p>
        <p className = "text-sm"><Link href="/#">Sell products on Amazon</Link></p>
        <p className = "text-sm"><Link href="/#">Your Recalls and Product Safety Alerts</Link></p>
        <p className = "text-sm"><Link href="/#">Customer Service</Link></p>

        </div>      
    </div>
  )
}

export default Footer

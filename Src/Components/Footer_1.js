import React from 'react'
import Link from 'next/link'

function Footer_1() {
  return (
    <div className = "text-white bg-amazon_blue-light mt-6  pt-6 pb-6">
     <div className = "  pl-40 pr-40  grid gap-10 grid-cols-4">
     <div  className = "space-y-1">
      <p className = "font-extrabold text-[18px]">Get to Know Us</p>
       <p className = "cursor-pointer text-sm"><Link href = "/#" > Careers</Link></p>
       <p className = "cursor-pointer text-sm"><Link href = "/#" > Blog</Link></p>
       <p className = "cursor-pointer text-sm"> <Link href = "/#" >About Amazon</Link></p>
       <p className = "cursor-pointer text-sm"> <Link href = "/#" >Investor Relations</Link></p>
       <p className = "cursor-pointer text-sm"><Link href = "/#" > Amazon Devices</Link></p>
       <p className = "cursor-pointer text-sm"><Link href = "/#" > Amazon Science</Link></p>
      </div>
      <div className = "space-y-1">
        	
      <p className = "font-extrabold text-[18px]">Make Money with Us</p>
        <p className = "cursor-pointer text-sm"><Link href = "/#" >Sell products on Amazon</Link></p>
        <p className = "cursor-pointer text-sm"><Link href = "/#" >Sell on Amazon Business</Link></p>
        <p className = "cursor-pointer text-sm"><Link href = "/#" >Sell apps on Amazon</Link></p>
       <p className = "cursor-pointer text-sm"><Link href = "/#" > Become an Affiliate</Link></p>
       <p className = "cursor-pointer text-sm"><Link href = "/#" > Advertise Your Products</Link></p>
       <p className = "cursor-pointer text-sm"><Link href = "/#" > Self-Publish with Us</Link></p>
       <p className = "cursor-pointer text-sm"><Link href = "/#" > Host an Amazon Hub</Link></p>
       <p className = "cursor-pointer text-sm"><Link href = "/#" > ›See More Make Money with Us</Link></p>
      </div>
      <div className = "space-y-1">
      <p className = "font-extrabold text-[18px]"> Amazon Payment Products</p>
        <p className = "cursor-pointer text-sm"><Link href = "/#" >Amazon Business Card</Link></p>
        <p className = "cursor-pointer text-sm"><Link href = "/#" >Shop with Points</Link></p>
       <p className = "cursor-pointer text-sm"><Link href = "/#" > Reload Your Balance</Link></p>
        <p className = "cursor-pointer text-sm"><Link href = "/#" >Amazon Currency Converter</Link></p>
      </div>
      <div className = "space-y-1">
      	
      <p className = "font-extrabold text-[18px]">Let Us Help You</p>
       <p className = "cursor-pointer text-sm"><Link href = "/#" > Amazon and COVID-19</Link></p>
       <p className = "cursor-pointer text-sm"><Link href = "/#" > Your Account</Link></p>
       <p className = "cursor-pointer text-sm"><Link href = "/#" > Your Orders</Link></p>
       <p className = "cursor-pointer text-sm"><Link href = "/#" > Shipping Rates & Policies</Link></p>
       <p className = "cursor-pointer text-sm"><Link href = "/#" > Returns & Replacements</Link></p>
       <p className = "cursor-pointer text-sm"><Link href = "/#" > Manage Your Content and Devices</Link></p>
       <p className = "cursor-pointer text-sm"><Link href = "/#" > Amazon Assistant</Link></p>
       <p className = "cursor-pointer text-sm"><Link href = "/#" > Help</Link></p>
      </div>
     </div>
      
      <hr className = "mb-3 mt-6 text-gray-200"/>
      
    </div>
  )
}

export default Footer_1

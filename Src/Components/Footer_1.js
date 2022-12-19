import React from 'react'
import Link from 'next/link'

function Footer_1() {
  return (
    <div className = " text-white bg-amazon_blue-light pl-40 pr-40 mt-6 pt-6 pb-6 grid gap-10 grid-cols-4">
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
      <div className = "space-y-1">Third one</div>
      <div className = "space-y-1">Fouth one</div>
    </div>
  )
}

export default Footer_1

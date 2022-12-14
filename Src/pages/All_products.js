import Link from 'next/link'
import React from 'react'
import Header from '../Components/Header'
function All_products() {
  return (
    <div>
    <div className = "flex" >
    <div className = " w-[1280px]">
      <Header/>

      {/* page content  */}
      <div className = "flex mt-5">
       <div className="w-[300px] border-2 border-red-600 p-1">
         <p className='text-[16px] font-extrabold'>Departments</p>
         <p className = "cursor-pointer hover:underline hover:text-orange-400 text-[13px]"><Link href="#">Women's Fashion</Link> </p>
         <p className = "cursor-pointer hover:underline hover:text-orange-400 text-[13px]"><Link href="#">Women's Shoes</Link> </p>
        <p className = "cursor-pointer hover:underline hover:text-orange-400 text-[13px]"><Link href="#"> Women's Clothing</Link></p>
        <p className = "cursor-pointer hover:underline hover:text-orange-400 text-[13px]"><Link href="#">Home & Kitchen</Link> </p>
        <p className = "cursor-pointer hover:underline hover:text-orange-400 text-[13px]"><Link href="#">Men's Fashion</Link> </p>
        <p className = "cursor-pointer hover:underline hover:text-orange-400 text-[13px]"><Link href="#">Boys' Fashion</Link> </p>
        <p className = "cursor-pointer hover:underline hover:text-orange-400 text-[13px]"><Link href="#">Girls' Jewelry</Link> </p>
        <p className = "cursor-pointer hover:underline hover:text-orange-400 text-[13px]"><Link href="#">Bath & Bathing Accessories</Link> </p>
       </div>
       <div className = "w-[1000px] border-2 border-blue-600">
        <h1>Right component</h1>
       </div>
      </div>
    </div>
    <div className = "w-[160px]">
    <h1>this is the cart section</h1>
    </div>
    </div>
    </div>
  )
}

export default All_products
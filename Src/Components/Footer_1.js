import React from 'react'

function Footer_1() {
  return (
    <div className = " text-white bg-amazon_blue-light pl-40 pr-40 mt-6 pt-6 pb-6 grid gap-10 grid-cols-4">
      <div  className = "border-2 border-red-600">
      <p className = "font-extrabold text-[20px]">Get to Know Us</p>
       <p><Link href = "/#" > Careers</Link></p>
       <p><Link href = "/#" > Blog</Link></p>
       <p> <Link href = "/#" >About Amazon</Link></p>
       <p> <Link href = "/#" >Investor Relations</Link></p>
       <p><Link href = "/#" > Amazon Devices</Link></p>
       <p><Link href = "/#" > Amazon Science</Link></p>
      </div>
      <div className = "border-2 border-red-600">Second one</div>
      <div className = "border-2 border-red-600">Third one</div>
      <div className = "border-2 border-red-600">Fouth one</div>
    </div>
  )
}

export default Footer_1

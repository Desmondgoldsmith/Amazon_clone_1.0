import React from 'react'
import Image from 'next/image'

function Signin() {
  return (
    <div className='bg-[rgb(255,255,255)]'>
      <div className='flex flex-col justify-center items-center border-2 border-red-600 '>
        <Image 
        src = "http://g-ec2.images-amazon.com/images/G/01/social/api-share/amazon_logo_500500._V323939215_.png"
        alt = "logo"
        width ={100}
        height = {100} 
        />
      </div>
    </div>
  )
}

export default Signin

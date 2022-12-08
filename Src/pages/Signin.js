import React from 'react'
import Image from 'next/image'

function Signin() {
  return (
    <div className='bg-[rgb(255,255,255)] grid justify-items-stretch'>
    {/* logo */}
      <div className='justify-self-center'>
        <Image 
        src = "http://g-ec2.images-amazon.com/images/G/01/social/api-share/amazon_logo_500500._V323939215_.png"
        alt = "logo"
        width ={150}
        height = {150} 
        />
      </div>
      {/* sign-in form */}
    <div className='border w-[500px] justify-self-center'>
        <h1>Create account</h1>
      </div>
      

    </div>
  )
}

export default Signin

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
    <div className='border w-[500px] justify-self-center pl-3 pr-3'>
        <h1 className='text-[30px]'>Create account</h1>
        <form className='mt-6'> 
        <label for = "name" className='font-bold grid mb-2'>Your name</label>
        <input className='rounded-sm border border-gray-400 grid' type="text" id='name' name='name' />
         </form>
      </div>
      

    </div>
  )
}

export default Signin

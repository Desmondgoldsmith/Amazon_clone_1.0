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
    <div className='border w-[450px] justify-self-center pl-3 pr-3'>
        <h1 className='text-[30px]'>Create account</h1>
        <form className='mt-6'> 
        <label for = "name" className='font-bold grid mb-2'>Your name</label>
        <input className='rounded-md border w-[400px] text-[15px] border-gray-400 grid p-1' type="text" id='name' name='name' placeholder='First and last name' />

        <label for = "name" className='font-bold grid mb-2 mt-2'>Mobile number or email</label>
        <input className='rounded-md border w-[400px] text-[15px] border-gray-400 grid p-1' type="text" id='name' name='name' />
        
        <label for = "name" className='font-bold grid mb-2 mt-2'>Password</label>
        <input className='rounded-md border w-[400px] text-[15px] border-gray-400 grid p-1' type="text" id='name' name='name' placeholder='At least 6 characters' />
         <p className='text-xs'>Passwords must be at least 6 characters long</p>
         </form>
      </div>
      

    </div>
  )
}

export default Signin

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

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
      {/* horizontal line*/}
      <hr className = "mb-3 mt-6 text-gray-200"/>

      <div className = "grid gap-2 grid-cols-3 place-items-center">
      <div onClick={()=>router.push('/')} className='mt-2 items-center hover:border border border-transparent p-1 hover:border-solid hover:border-white cursor-pointer'>
         <Image src = 'https://pngimg.com/uploads/amazon/amazon_PNG25.png'
          width={100}
          height={20}
          className = "cursor-pointer"
         />
       </div>
              {/* language section */}
      <div className=' mr-2 space-x-1   p-1 border border-white cursor-pointer   group relative'>
        <Image src='https://etc.usf.edu/clipart/72500/72519/72519_28_us_c_lg.gif'
          width={30}
          height={10}
        />
        <button>
        <p className='font-extrabold text-base flex '>English
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
    </svg>
        </p>
          </button>
    
        {/* dropdown */}
        <nav tabIndex={0} onKeyDown = {0} role = 'button' className="border z-50 border-gray-200 mt-2.5 bg-gray-100 invisible rounded w-60  absolute left-0 top-full transition-all opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-1">
            <ul className="py-1 text-black p-3 space-y-3">
                <li className='flex items-center'>
                   <p className='font-bold'>Change language</p>
                    <Link href="#" className="block px-4 py-2 hover:bg-gray-100 hover:underline hover:text-blue-400">
                        learn more 
                    </Link>
                </li>


                <li className='flex items-center space-x-2'>
                <input className='accent-yellow-500' type="radio" id="" name="english" value="English" />
                <label className='text-base'>English - EN</label>
                </li>

                <li>
                  <hr className='mt-2 mb-2  border-1'/>
                </li>

                <li className='flex items-center space-x-2'>
                <input className='accent-yellow-500  ' type="radio" id="" name="spanish" value="Spanish" />
                <label className = 'hover:underline hover:text-yellow-500 text-base' >español - ES</label>
                </li>
               
                <li className='flex items-center space-x-2'>
                <input className='accent-yellow-500 ' type="radio" id="" name="arabic" value="Arabic" />
                <label className = 'hover:underline hover:text-yellow-500 text-base' >العربية - AR</label>
                </li>
               
                <li className='flex items-center space-x-2'>
                <input className='accent-yellow-500 ' type="radio" id="" name="deutsche" value="Deutsche" />
                <label className = 'hover:underline hover:text-yellow-500 text-base' >Deutsch - DE</label>
                </li>
                
                <li className='flex items-center space-x-2'>
                <input className='accent-yellow-500 ' type="radio" id="" name="hebrew" value="Hebrew" />
                <label  className = 'hover:underline hover:text-yellow-500 text-base'>עברית - HE</label>
                </li>
                
                <li className='flex items-center space-x-2'>
                <input className='accent-yellow-500 ' type="radio" id="" name="korea" value="Korea" />
                <label className = 'hover:underline hover:text-yellow-500 text-base' >한국어 - KO</label>
                </li>
                
                <li className='flex items-center space-x-2'>
                <input className='accent-yellow-500 ' type="radio" id="" name="portuguse" value="Portuguse" />
                <label  className = 'hover:underline hover:text-yellow-500 text-base'>português - PT</label>
                </li>
               
                <li className='flex items-center space-x-2'>
                <input className='accent-yellow-500 ' type="radio" id="" name="china" value="China" />
                <label>中文 (简体) - ZH</label>
                </li>

                 <li>
                  <hr className='mt-2 mb-2'/>
                </li>

                <li className='flex items-center'>
                   <p className='font-bold'>Change currency</p>
                    <Link href="#" className="block px-4 py-2 hover:bg-gray-100 hover:underline hover:text-blue-400">
                        learn more 
                    </Link>
                </li>

                <li className='flex items-center justify-between'>
                  <p>$ - USD - US Dollar</p>
                  <p className='hover:underline  hover:text-blue-400'><Link href='#'>Change</Link></p>
                </li>

                <li className='flex items-center space-x-2'>
                <Image src='https://etc.usf.edu/clipart/72500/72519/72519_28_us_c_lg.gif'
                  width={20}
                  height={8}
                />
                  <p>You are shopping on Amazon.com</p>
                </li>

                <li className='text-center text-blue-500'>
                  <p className='hover:underline  hover:text-blue-400'><Link href = "#">Change country/region.</Link></p>

                </li>

            </ul>
        </nav>
      </div>
      {/* us-dollar */}
      <div className=' mr-2 space-x-1   p-1 border border-white cursor-pointer   group relative'>
       <p className = "font-extrabold">$ usd-us dollar</p>
      </div>
      </div>
    </div>
  )
}

export default Footer_1

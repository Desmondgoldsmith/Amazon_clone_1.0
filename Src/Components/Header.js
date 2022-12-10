import React from 'react'
import { MenuIcon , ShoppingCartIcon } from "@heroicons/react/24/outline"
import Image from 'next/image'
import Link from 'next/link'
import Sidenav from './Sidenav'
import Searchbar from './Searchbar'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/router'

function Header() {
    const { data: session} = useSession() //storing user login details in session
    const router  = useRouter() //to get our router object
  return (
    <header>
      <div className='bg-[rgb(26,33,45)] flex p-1 items-center flex-grow'>
       {/* left section */}
       <div className = 'text-white lg:hidden sm:flex hover:border border-white'>
       <Sidenav />
       </div>
       <div className='mt-2 items-center flex-grow sm:flex-grow-0 hover:border border border-transparent p-1 hover:border-solid hover:border-white cursor-pointer'>
         <Image src = 'https://pngimg.com/uploads/amazon/amazon_PNG25.png'
          width={100}
          height={20}
          className = "cursor-pointer"
         />
       </div>
       {/* delivery location */}
       <div className='hidden lg:inline text-white ml-2 mr-2 hover:border border border-transparent p-1 hover:border-solid hover:border-white cursor-pointer'>
        <p className='text-xs pl-3'>Deliver to</p>
        <p className='flex font-extrabold'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
        Ghana
      </p>
    </div>


       {/* search bar */}
       <div className='invisible lg:visible lg:flex md:visible md:flex flex-grow items-center bg-[rgb(232,166,84)] h-10 cursor-pointer ml-2 hover:bg-yellow-500 border rounded-md'>
       <select className='hidden md:inline w-13 focus:outline-orange-400 text-center h-full text-xs bg-gray-300 text-gray-600 rounded-l-md' name="cars" id="cars">
        <option value="volvo">All</option>
        <option value="saab">Arts</option>
        <option value="mercedes">Automotive</option>
        <option value="audi">Baby</option>
        <option value="audi">Books</option>
        <option value="audi">Deals</option>
        <option value="audi">Electronics</option>
        <option value="audi">Luggage</option>
        <option value="audi">Movie</option>
        <option value="audi">Deals</option>
        <option value="audi">Deals</option>
        <option value="audi">Deals</option>
      </select>
        <Searchbar />
       </div>
       {/* right section */}
      <div className='text-white text-xs flex space-x-2 items-center mx-6 whitespace-nowrap'>
      
            {/* language section */}
      <div className='hidden lg:flex  mr-2 space-x-1 hover:border border border-transparent p-1 hover:border-solid hover:border-white cursor-pointer   group relative'>
        <Image src='https://etc.usf.edu/clipart/72500/72519/72519_28_us_c_lg.gif'
          width={30}
          height={10}
        />
        <button>
        <p className='font-extrabold text-base flex '>EN
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
      {/* sign-in [display only on small screens] */}
      <div className = 'lg:hidden sm:flex p-1 hover:border hover:border-white'>
        <p onClick = {()=>router.push('/Signin')} className='flex items-center font-extrabold'>Sign in 
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
        <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
      </svg> */}

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 font-extrabold">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>
</p>
      </div>
      <div className='hidden lg:block hover:border hoverable border border-transparent p-1 hover:border-solid hover:border-white cursor-pointer group relative '>
        <p onClick = {!session ? signIn : signOut} className = "font-bold">{session ? `${session.user.name}` : "Sign-in"}</p>
        <button className='font-extrabold link  text-sm flex '>Accounts & Lists
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
    </svg>
        </button>
        <nav tabIndex={0} className="z-50 mr-10 border-1 border-gray-200 mt-2.5 bg-gray-100 invisible rounded w-80  absolute left-0 top-full transition-all opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-1 ">
            <ul className="py-1">
                <li>
                    <Link href="#" className="block text-center text-black hover:bg-gray-100">
                       <p>{session ? `Email : ${session.user.email}` : ""}</p>
                       <button onClick = {!session ? signIn : signOut} className='bg-yellow-400 p-3 w-60 font-bold  text-gray-700 rounded-md hover:bg-yellow-500 cursor-pointer'>{session ? "Sign out" : "Sign in"}</button>
                       <p className = "text-center font-xs">New customer here ? <span className='hover:underline hover:text-blue-500'>start here</span></p>
                    </Link>
                </li>

                <li className='pt-5'><hr/></li>

                <div className='grid grid-cols-2 divide-x'>
                    <li className="block px-4 py-2 text-black hover:bg-gray-100">
                    <Link href="#" >
                      <p className='font-extrabold text-lg'>Your Lists</p>
                     </Link>
                  <Link href="#" >
                        <p  className='text-gray-800 text-xs hover:underline hover:text-orange-500'>create a list</p>
                  </Link>

                      <Link href="#" >
                      <p className='text-gray-800 text-xs hover:underline hover:text-orange-500'>find a list or registry</p>
                      </Link>
                      <Link href="#" >
                      <p className='text-gray-800 text-xs hover:underline hover:text-orange-500 truncate'>Amazon smile charity list</p>
                      </Link>
                </li>

                {/* right section of dropdown */}
                
                <li>
                <Link  href='#'>
                           <p className='font-extrabold text-lg text-black'>Your Account</p>
                </Link>
                        <Link  href='#'>
                           <p className='text-gray-800 text-xs hover:underline hover:text-orange-500 truncate' >Account</p>
                        </Link>
                      
                        <Link href='#'>
                          <p className='text-gray-800 text-xs hover:underline hover:text-orange-500 truncate'>Orders</p>
                        </Link>
                          
                    
                        <Link href='#'>
                          <p className='text-gray-800 text-xs hover:underline hover:text-orange-500 truncate'>Recommendations</p>
                        </Link>
                          
                        <Link href='#'>
                           <p className='text-gray-800 text-xs hover:underline hover:text-orange-500 truncate'>Browsing History</p>
                        </Link>
                    
                        <Link  href='#'>
                          <p className='text-gray-800 text-xs hover:underline hover:text-orange-500 truncate'>Watchlist</p>
                        </Link>
                  
                        <Link  href='#'>
                          <p className='text-gray-800 text-xs hover:underline hover:text-orange-500 truncate'>Video Purchases & Rentals</p>
                        </Link>
                        
                        <Link  href='#'>
                          <p className='text-gray-800 text-xs hover:underline hover:text-orange-500 truncate'>Kindle Unlimited</p>
                        </Link>
                 
                        <Link  href='#'>
                          <p className='text-gray-800 text-xs hover:underline hover:text-orange-500 truncate'>Content & Devices</p>
                        </Link>
                        <Link  href='#'>
                          <p className='text-gray-800 text-xs hover:underline hover:text-orange-500 truncate'>Subscribe & Save Items</p>
                        </Link>
                       
                        <Link  href='#'>
                          <p className='text-gray-800 text-xs hover:underline hover:text-orange-500 truncate'>Memberships & Subscriptions</p>
                        </Link>
                    
                        <Link  href='#'>
                          <p className='text-gray-800 text-xs hover:underline hover:text-orange-500 truncate'>Memberships & Subscriptions</p>
                        </Link>
                        
                        <Link  href='#'>
                          <p className='text-gray-800 text-xs hover:underline hover:text-orange-500 truncate'>Music Library</p>
                        </Link>
                    
        
                </li>
                </div>
              
            </ul>
        </nav>
      </div>
      <div className='hidden lg:block hover:border border border-transparent p-1 hover:border-solid hover:border-white cursor-pointer'>
        <p>Returns</p>
        <p className='font-extrabold  link text-sm'>& Orders</p>
      </div>
      <div className='relative flex items-center hover:border border border-transparent p-1 hover:border-solid hover:border-white cursor-pointer'>
      <ShoppingCartIcon className='h-10' />
      <span className='absolute ml-4 z-50 bg-amazon_blue text-center px-0.5 mb-5 hover:no-underline text-orange-500 font-extrabold text-sm'>0</span>

      <p className='hidden sm:inline font-extrabold link text-sm'>Cart</p>
      </div>
      </div>
      </div>

{/* second nav */}

      <div className='lg:bg-amazon_blue-light pb-2 border border-[rgb(26,33,45)] md:bg-amazon_blue-light bg-[rgb(26,33,45)] lg:h-10 md:h-10 sm:h-20  text-white '>
        {/* search bar */}
        <div className='pl-1 pr-2 lg:hidden md:hidden sm:block '>
           <div className='flex items-center text-black bg-yellow-400 h-10 cursor-pointer ml-2 hover:bg-yellow-500 border rounded-md'>
        <Searchbar />
       </div>
        </div>
       
      <div className='flex items-center space-x-1 pt-1 pb-1 whitespace-nowrap overflow-x-scroll scrollbar-hide' >
       <div className='items-center hover:border border-white hidden  lg:flex '>
        <Sidenav /> <p className='font-extrabold'>All</p>
        </div>
        
        <div className='flex space-x-2 lg:text-sm md:text-sm sm:text-base cursor-pointer  '>
          <p className='p-1 hover:border border-white'><Link href = "#" >Todat's Deal</Link></p>
          <p className='p-1 hover:border border-white'><Link href = "#" >Customer Service</Link></p>
          <p className='p-1 hover:border border-white'><Link href = "#" >Registry</Link></p>
          <p className='p-1 hover:border border-white'><Link href = "#" >Gift cards</Link></p>
          <p className='p-1 hover:border border-white'><Link href = "#" >Sell</Link></p>
        </div>
      <div className='pr-2 p-1  md:pl-[200px] lg:pl-[600px]'>
        <p className='hover:border text-base border-white cursor-pointer'>Turn up the cheer, shop gifts now</p>
      </div>
      </div>
      </div>
      {/* visible on small screens */}
      <div className='bg-[rgb(42,54,72)] border border-[rgb(42,54,72)] h-9 lg:hidden sm:flex md:hidden'>
        <div className='flex flex-row space-x-2 text-white ml-1 mr-2 hover:border border border-transparent p-1  cursor-pointer'>
                <p className='flex flex-row pl-3'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                Deliver to</p>
                <p className='font-extrabold '>
                Ghana
              </p>
            </div>
      </div>
     

    </header>
  )
}

export default Header

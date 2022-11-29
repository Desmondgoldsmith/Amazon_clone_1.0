import React,{useState} from 'react'
import Sidebar from './Sidebar'

function Sidenav() {
    const [openNav, setOpenNav] = useState(false) //defined a hook to handle the open and close feature of the sidenav
    const [closeBtn, setCloseBtn] = useState(false) 
    // function to close the sidenav
    const closeSideBar = (e) => {
        e.preventDefault()
        setOpenNav(false)
        setCloseBtn(false)
    }
  return (
    <>
    {/* className = {`${openNav  ? 'translate-x-full' : 'translate-x-0'} ease-in-out duration-200`} */}

    {openNav && closeBtn  &&  (
    <div className='flex space-x-80'>
        <div className='overflow-hidden max-w-xs w-4/5 h-full fixed z-50 top-0 left-0 bg-white text-black origin-left '>
           {/* header */}
           <div className='bg-amazon_blue-light text-white p-4'>
            <p className='font-bold text-base text-center'>Hello, sign in</p>
           </div>
           <div className='text-black p-3'>
            <p className='font-extrabold text-base '>Digital Content & Devices</p>
           </div>
           <div className='text-black pt-2 pl-5 pb-2 hover:bg-gray-200 cursor-pointer '>
            <p className='text-sm flex items-center justify-between'>Amazon Music
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
            </svg>
            </p>
           </div>
           <div className='text-black pt-2 pl-5 pb-2 hover:bg-gray-200 cursor-pointer '>
            <p className='text-sm flex items-center justify-between'>kindle E-readers & books
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
            </svg>
            </p>
           </div>
           <div className='text-black pt-2 pl-5 pb-2 hover:bg-gray-200 cursor-pointer '>
            <p className='text-sm flex items-center justify-between'>Amazon Appstore
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
            </svg>
            </p>
           </div>
           <div className='pt-2 pb-2'><hr className='ml-4 mr-4 '/></div>

           {/* second nav details */}
           <div className='text-black p-3'>
            <p className='font-extrabold text-base '>shop By Department</p>
           </div>
           <div className='text-black pt-2 pl-5 pb-2 hover:bg-gray-200 cursor-pointer '>
            <p className='text-sm flex items-center justify-between'>Electronics
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
            </svg>
            </p>
           </div>
           <div className='text-black pt-2 pl-5 pb-2 hover:bg-gray-200 cursor-pointer '>
            <p className='text-sm flex items-center justify-between'>Computers
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
            </svg>
            </p>
           </div>
           <div className='text-black pt-2 pl-5 pb-2 hover:bg-gray-200 cursor-pointer '>
            <p className='text-sm flex items-center justify-between'>Smart home
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
            </svg>
            </p>
           </div>
           <div className='text-black pt-2 pl-5 pb-2 hover:bg-gray-200 cursor-pointer '>
            <p className='text-sm flex items-center justify-between'>Arts & Craft
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
            </svg>
            </p>
           </div>
           <div className='text-black pt-2 pl-5 pb-2 hover:bg-gray-200 cursor-pointer '>
            <p className='text-sm flex items-center space-x-2'>See all 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
            </svg>

            </p>
           </div>
           <div className='pt-2 pb-2'><hr className='ml-4 mr-4 '/></div>

           {/* second nav details */}
           <div className='text-black p-3'>
            <p className='font-extrabold text-base '>Program and Features</p>
           </div>
           <div className='text-black pt-2 pl-5 pb-2 hover:bg-gray-200 cursor-pointer '>
            <p className='text-sm flex items-center justify-between'>Gift cardsa
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
            </svg>
            </p>
           </div>
           <div className='text-black pt-2 pl-5 pb-2 hover:bg-gray-200 cursor-pointer '>
            <p className='text-sm '>#foundItonAmazon
            </p>
           </div>
           <div className='text-black pt-2 pl-5 pb-2 hover:bg-gray-200 cursor-pointer '>
            <p className='text-sm flex items-center justify-between'>Amazon live
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
            </svg>
            </p>
           </div>
           <div className='text-black pt-2 pl-5 pb-2 hover:bg-gray-200 cursor-pointer '>
            <p className='text-sm flex items-center justify-between'>International shopping
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
            </svg>
            </p>
           </div>
           <div className='text-black pt-2 pl-5 pb-2 hover:bg-gray-200 cursor-pointer '>
            <p className='text-sm flex items-center space-x-2'>See all 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
            </svg>

            </p>
           </div>
           <div className='pt-2 pb-2'><hr className='ml-4 mr-4 '/></div>


         </div>
    {/* // translate-x-[-420px] */}
    <div className='z-50 top-0 fixed  mt-4 '>
    <button onClick={(e)=>closeSideBar(e)}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-20 h-10 text-white">
        <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
        </svg>
    </button>
    </div>
    {/* setting opacity */}
    <div className='top-0 left-0 w-[1200px] h-[178vh] z-20 bg-[rgba(0,0,0,0.5)]'>
    </div>

    </div>
    )}
    <Sidebar openNav = {openNav} setOpenNav = {setOpenNav} closeBtn = {closeBtn} setCloseBtn = {setCloseBtn}/>
   {/* introduced the sidebar componnet here so we can display it on the page and also pass some props to it */}
    </>
    )
}

export default Sidenav
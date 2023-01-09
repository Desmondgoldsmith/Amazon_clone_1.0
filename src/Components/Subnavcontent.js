import React,{useState} from 'react'
import Sidenav from './Sidenav'
import { useSession} from "next-auth/react"


function Subnavcontent() {
    const [openNavContent,setOpenNavContent] = useState(false)
    const {data:session} = useSession()
  return (
    <>
     {/* open and close sub nav content */}
     {openNavContent && (
    <div className='flex space-x-80'>
     <div className='overflow-hidden  overflow-y-auto scrollbar-hide  max-w-xs w-4/5 h-full fixed z-50 top-0 left-0 bg-white text-black origin-left'>
          <div className='bg-amazon_blue-light text-white p-4'>
            <p className='font-bold text-base text-center'>{!session ? "Hello, sign in" : session.user.name}</p>
           </div>
          
          <div className='bg-white text-black p-3 hover:bg-gray-200'>
            <p className='font-bold text-base flex space-x-1 cursor-pointer' role= 'button' onClick={(e)=>openSideBar(e)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-500">
         <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
          </svg>
        Main Menu</p>
           </div>
    <div></div>
           <div className='text-black p-3 pl-4'>
            <p className='font-extrabold text-base '>Stream Music</p>
           </div>

           <div className='text-black pt-2 pl-5 pb-2 hover:bg-gray-200 cursor-pointer '>
            <p className='text-sm flex items-center justify-between'>Amazon music unlimited
            </p>
           </div>
           <div className='text-black pt-2 pl-5 pb-2 hover:bg-gray-200 cursor-pointer '>
            <p className='text-sm flex items-center justify-between'>Free streaming music
            </p>
           </div>
           <div className='text-black pt-2 pl-5 pb-2 hover:bg-gray-200 cursor-pointer '>
            <p className='text-sm flex items-center justify-between'>Podcast
            </p>
           </div>
           <div className='text-black pt-2 pl-5 pb-2 hover:bg-gray-200 cursor-pointer '>
            <p className='text-sm flex items-center justify-between'>Play Music
            </p>
           </div>
           <div className='text-black pt-2 pl-5 pb-2 hover:bg-gray-200 cursor-pointer '>
            <p className='text-sm flex items-center justify-between'>Open web player
            </p>
           </div>
           <div className='text-black pt-2 pl-5 pb-2 hover:bg-gray-200 cursor-pointer '>
            <p className='text-sm flex items-center justify-between'>Download the App
            </p>
           </div>
        
     </div>

     
     
     {/* close sidebar button */}
    <div className='z-50 top-0 fixed  mt-4 '>
    <button onClick={(e)=>closeSubSideBar(e)}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-20 h-10 text-white">
        <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
        </svg>
    </button>
    </div>

      {/* blurring the screen when side nav shows */}
    <div className='top-0 left-0 w-[1200px] h-[178vh] z-20 bg-[rgba(0,0,0,0.7)]' onClick={(e)=>closeSubSideBar(e)}>
    </div>
    
    </div>
    )}
    <Sidenav openNavContent1 ={openNavContent} setOpenNavContent1 = {setOpenNavContent} />
    </>
  )
}

export default Subnavcontent
import React,{useState} from 'react'
import Sidenav from './Sidenav'


function Subnavcontent() {
    const [openNavContent,setOpenNavContent] = useState(true)
  return (
    <>
    {openNavContent && (
    <div>
     <div className='overflow-hidden  overflow-y-auto scrollbar-hide  max-w-xs w-4/5 h-full fixed z-50 top-0 left-0 bg-[rgba(0,0,0,0.7)] text-white origin-left'>
        Subnavcontt
     </div>
    
    </div>
    )}

    {/* <Sidenav openNavContent1 ={openNavContent} setOpenNavContent1 = {setOpenNavContent} /> */}

    </>
  )
}

export default Subnavcontent
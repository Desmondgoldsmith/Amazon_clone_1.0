import React from 'react'
import { Transition } from 'react-transition-group'
import Sidenav from './Sidenav'


function Sidebar({openNav , setOpenNav , closeBtn , setCloseBtn}) {
    // a function to open sidebar when clicked
    const openSideBar = (e) => {
        e.preventDefault()
        setOpenNav(true)
        setCloseBtn(true)
    }
  return (
    <>
    <div>
    {/* animation using React transition group */}
    <Transition
     in = {openNav}
     timeout={300}
     mountonEnter
     unmountOnExit
    >
        {
            state => {
                return (
                    <Sidenav state = {state}></Sidenav>
                )
                                  
            }
        }
    </Transition>
    <button onClick={(e)=>openSideBar(e)} >
     <div className='flex items-center space-x-2 px-2 py-1 p-0.5 hover:border border-white'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="M3 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 5.25zm0 4.5A.75.75 0 013.75 9h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
      </svg>
      <p className='font-extrabold '>All</p>
        </div>
    </button>
    </div>
    </>
  )
}

export default Sidebar
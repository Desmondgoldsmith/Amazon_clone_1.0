import Head from 'next/head'
import Header from '../Components/Header'
import Sidenav from '../Components/Sidenav'
import { Transition } from 'react-transition-group'
import React,{useState} from 'react'

export default function Home() {
  const [openNav, setOpenNav] = useState(false) //defined a hook to handle the open and close feature of the sidenav
  const opentheNav = () =>{ //function to open the sidenav
    setOpenNav(true) 
  } 
  const closetheNav = () =>{ //function to close the sidenav
    setOpenNav(flase)
  } 
return (
    <div>
      <Head>
        <title>Amazon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* header section */}
      <Header />
      <Sidenav/>
    </div>
  )
}

// dependencies
// npm i react-transition-group - react transition group
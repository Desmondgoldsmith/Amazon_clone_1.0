import React,{useEffect}from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import {useSession , signIn , signOut , getSession} from "next-auth/react"

function Signin() {
  const router = useRouter() //creating a router object to be able to use it in our routes
  const {data: session} = useSession()
  const tellEm = () =>{
    window.alert("Please sign-in with Google 👇🏻. Thanks")
  }

    // if session exists we redirrect to home page else we display login
    // i'm using client-side rendering to redirrect because server-side rendering's redirrect exceeds vercel's 5 second free timeout causing an error.
    // to solv that i'll have to purchase a plan to get more time for rendering on the server
    if (session) {
        router.push("/")
    }else{
return (
    <div className='bg-[rgb(255,255,255)] grid justify-items-stretch -mt-[30px]'>
    {/* logo */}
      <div className='justify-self-center'>
        <Image 
        src = "http://g-ec2.images-amazon.com/images/G/01/social/api-share/amazon_logo_500500._V323939215_.png"
        alt = "logo"
        width ={150}
        height = {100} 
        />
      </div>
      {/* sign-in form */}
    <div className='border p-2 md:p-0 lg:p-0 w-[380px] justify-self-center pl-2 pr-2 -mt-[20px]'>
        <h1 className='text-[30px]'>Create account</h1>
        <p className = "text-center text-xs text-red-600 font-extrabold">Please sign in only with google </p>
        <form className='mt-3'> 
        <label  className='font-bold grid mb-2'>Your name</label>
        <input className='rounded-md border w-[360px] text-[15px] border-gray-400 grid p-1' type="text" id='name' name='name' placeholder='First and last name' />

        <label  className='font-bold grid mb-2 mt-2'>Mobile number or email</label>
        <input className='rounded-md border w-[360px] text-[15px] border-gray-400 grid p-1' type="text" id='name' name='name' />
        
        <label  className='font-bold grid mb-2 mt-2'>Password</label>
        <input className='rounded-md border w-[360px] text-[15px] border-gray-400 grid p-1' type="text" id='name' name='name' placeholder='At least 6 characters' />
         <p className='text-xs'>Passwords must be at least 6 characters long</p>

        <label  className='font-bold grid mb-2 mt-2'>Re-enter password</label>
        <input className='rounded-md border w-[360px] text-[15px] border-gray-400 grid p-1' type="text" id='name' name='name'/>
        
        <button onClick = {tellEm} className='bg-[rgb(240,197,97)] hover:bg-yellow-500 w-[360px] h-[35px] mt-3 rounded-md'>Continue</button>
        <button onClick={!session ? signIn : signOut} className='bg-white w-[360px] h-[35px] hover:bg-black hover:text-white mt-3 rounded-md'>{session ? "Sign out of Amazon Clone" : "Sign-in with Google"}</button>
         <p className='text-xs mt-3'>By creating an account, you agree to Amazon's <span className='text-blue-500'>Conditions of Use</span>  and <span className='text-blue-500'>Privacy Notice</span>.</p>
         
         </form>
         <hr className='mt-4 mb-4 w-[250px] justify-self-center'/>
         <p  className='text-sm'>Already have an account? <span className='text-blue-500'>Sign in</span> </p>
         <p className='text-sm mb-3'>Buying for work? <span className='text-blue-500'>Create a free business account</span> </p>
      </div>
      

    </div>
  )
}

    }



  // using server side auth
// export async function getServerSideProps(context){
//   const session = await getSession(context)
//   if(session){
//     return{
//       redirect : {destination : '/'}
//     }
//   }

//   return{
//     props:{
//       session
//     }
//   }
//}
export default Signin

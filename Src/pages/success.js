import react from 'react'
import Header from '../Components/Header';


function success(){
    return(
        <div>
          <Header/>
          <div className = "ml-0 mr-0 w-full md:ml-[300px] md:mr-[300px] lg:ml-[300px] lg:mr-[350px]  md:w-[600px] lg:w-[800px]  border border-green-400  mt-10">
            <div className = "border border-green-300">
            <div className = "border border-green-200 p-4 ">
            <p className ="text-green-600 text-[20px] text-center font-bold ">Thank you, Your order has been confirmed !</p>   
             <p className = "text-center text-sm "> please chech your email for order confirmation and detailed delivery</p>   
         
             </div>
             </div
             </div>
        </div>
    )
}


export default success
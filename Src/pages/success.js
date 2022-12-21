import react from 'react'
import Header from '../Components/Header';


function success(){
    return(
        <div>
          <Header/>
          <div className = "ml-0 mr-0 w-full md:ml-[300px] md:mr-[300px] lg:ml-[300px] lg:mr-[350px]  md:w-[600px] lg:w-[800px]  border border-green-400 p-4 mt-10">
             <p className ="text-green-600 text-[20px] text-center font-bold ">Thank you, Your order has been confirmed !</p>   
             <p className = "text-center text-sm "> please chech your email for order confirmation and detailed delivery</p>   
          </div>
        </div>
    )
}


export default success
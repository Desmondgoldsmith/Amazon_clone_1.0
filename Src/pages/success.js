import react from 'react'
import Header from '../Components/Header';


function success(){
    return(
        <div>
          <Header/>
          <div className = "w-full justify-center border-2 border-red-600">
             <p>Money</p>   
          </div>
        </div>
    )
}


export default success
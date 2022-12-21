import react from 'react'
import Header from '../Components/Header';


function success(){
    return(
        <div>
          <Header/>
          <div className = "ml-0 mr-0 w-full md:ml-[300px] md:mr-[300px] md:w-[600px] lg:w-[800px]  border-2 border-red-600">
             <p>Money</p>   
          </div>
        </div>
    )
}


export default success
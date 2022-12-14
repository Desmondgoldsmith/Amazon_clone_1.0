import React from 'react'
import Header from '../Components/Header'
function All_products() {
  return (
    <div>
    <div className = "flex" >
    <div className = " w-[1280px]">
      <Header/>

      {/* page content  */}
      <div className = "flex mt-5">
       <div className="w-[300px] border-2 border-red-600">
        <h1>Left component</h1>
       </div>
       <div className = "w-[1000px] border-2 border-blue-600">
        <h1>Right component</h1>
       </div>
      </div>
    </div>
    <div className = "w-[160px]">
    <h1>this is the cart section</h1>
    </div>
    </div>
    </div>
  )
}

export default All_products
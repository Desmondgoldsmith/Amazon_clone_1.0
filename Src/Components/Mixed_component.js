import React from 'react'

function Mixed_component({header,productImage1, productImage2, productImage3, productImage4,productName }) {
  return (
    <div>
      <Image src={productImage1} 
        width={200}
        height={200} 
      />
         <Image src={productImage1} 
        width={200}
        height={200} 
      />
         <Image src={productImage1} 
        width={200}
        height={200} 
      />
         <Image src={productImage1} 
        width={200}
        height={200} 
      />
    </div>
  )
}

export default Mixed_component

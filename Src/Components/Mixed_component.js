import React from 'react'

function Mixed_component({header,productImage1, productImage2, productImage3, productImage4,productName }) {
  return (
    <div className='bg-white p-10   w-[400px] z-30 lg:h-[300px] md:h-[300px] sm:h-[50]'>
        <p className='font-extrabold whitespace-nowrap'>{header}</p>
      <Image src={productImage1} 
        width={200}
        height={200} 
      />
         <Image src={productImage2} 
        width={200}
        height={200} 
      />
         <Image src={productImage3} 
        width={200}
        height={200} 
      />
         <Image src={productImage4} 
        width={200}
        height={200} 
      />
    </div>
  )
}

export default Mixed_component

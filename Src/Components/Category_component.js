import React from 'react'
import Product_category from './Product_category'

function Category_component() {
  return (
    <div className='flex space-x-3 ml-2 mr-2 -mt-[30px] lg:mt-[-200px] md:-mt-52  overflow-x-scroll scrollbar-hide'>
      <Product_category/>
      <Product_category/>
      <Product_category/>
      <Product_category/>
    </div>
  )
}

export default Category_component
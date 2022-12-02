import React from 'react'
import Product_category from './Product_category'

function Category_component() {
  return (
    <div className='flex space-x-5'>
      <Product_category/>
      <Product_category/>
      <Product_category/>
      <Product_category/>
    </div>
  )
}

export default Category_component
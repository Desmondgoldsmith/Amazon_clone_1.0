import React from 'react'
import Product_category from './Product_category'

function Category_component() {
  return (
    <div className='flex space-x-3 ml-2 mr-2 border-2 border-green-600 lg:-mt-52  md:-mt-52 sm:-mt-35'>
      <Product_category/>
      <Product_category/>
      <Product_category/>
      <Product_category/>
    </div>
  )
}

export default Category_component
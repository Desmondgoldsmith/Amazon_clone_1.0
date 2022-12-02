import React from 'react'
import Product_category from './Product_category'

function Category_component() {
  return (
    <div className='flex space-x-3 ml-2 mr-2 -mt-[30px] lg:mt-[-200px] md:-mt-52  overflow-x-scroll scrollbar-hide'>
      <Product_category header = "Gaming Accessories" productImage = "" productImage1 = "" productImage2 = "" productImage3 = "" productImage4 = ""  productName = "" />
      <Product_category header = "Dresses" productImage = ""  productName = ""/>
      <Product_category header = "Shop by category" productImage = ""  productName = ""/>
      <Product_category header = "Health & Personal Care" productImage = ""  productName = ""/>
    </div>
  )
}

export default Category_component
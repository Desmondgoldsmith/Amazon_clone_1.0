import React from 'react'
import Product_category from './Product_category'

function Category_component() {
  return (
    <div className='flex space-x-3 ml-2 mr-2 -mt-[30px] lg:mt-[-250px] md:-mt-[-250px]  overflow-x-scroll scrollbar-hide'>
      <Product_category header = "Gaming Accessories"  productImage1 = "https://raw.githubusercontent.com/Desmondgoldsmith/Amazon_clone_1.0/main/public/41J4WL-j4OL-_SX1500_.jpg" productImage2 = "https://raw.githubusercontent.com/Desmondgoldsmith/Amazon_clone_1.0/main/public/41J4WL-j4OL-_SX1500_.jpg" productImage3 = "https://raw.githubusercontent.com/Desmondgoldsmith/Amazon_clone_1.0/main/public/41J4WL-j4OL-_SX1500_.jpg" productImage4 = "https://raw.githubusercontent.com/Desmondgoldsmith/Amazon_clone_1.0/main/public/41J4WL-j4OL-_SX1500_.jpg"  productName = "Headset" />
      <Product_category header = "Dresses" productImage = "https://raw.githubusercontent.com/Desmondgoldsmith/Amazon_clone_1.0/main/public/41J4WL-j4OL-_SX1500_.jpg"  productName = ""/>
      <Product_category header = "Shop by category" productImage = "https://raw.githubusercontent.com/Desmondgoldsmith/Amazon_clone_1.0/main/public/41J4WL-j4OL-_SX1500_.jpg"  productName = ""/>
      <Product_category header = "Health & Personal Care" productImage = "https://raw.githubusercontent.com/Desmondgoldsmith/Amazon_clone_1.0/main/public/41J4WL-j4OL-_SX1500_.jpg"  productName = ""/>
    </div>
  )
}

export default Category_component
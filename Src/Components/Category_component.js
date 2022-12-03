import React from 'react'
import Mixed_component from './Mixed_component'
import Product_category from './Product_category'

function Category_component() {
  return (
    <div className='space-y-3 ml-2 mr-2 -mt-[30px] lg:mt-[-320px] md:-mt-[-320px]  overflow-x-scroll scrollbar-hide '>
      <div className='z-30 space-x-3  flex'>
      <Product_category link = "shop now" header = "Get fit at home" productImage = "https://raw.githubusercontent.com/Desmondgoldsmith/Amazon_clone_1.0/main/public/Images/Dresses.jpg" />
      <Product_category link = "shop now" header = "Easy returns" productImage = "https://raw.githubusercontent.com/Desmondgoldsmith/Amazon_clone_1.0/main/public/Images/Dresses.jpg" />
      <Mixed_component link = "shop now" header = "Shop by category" productImage1 = "https://raw.githubusercontent.com/Desmondgoldsmith/Amazon_clone_1.0/main/public/Images/computer.jpg" productImage2 = "https://raw.githubusercontent.com/Desmondgoldsmith/Amazon_clone_1.0/main/public/Images/PS4.jpg" productImage3 = "https://raw.githubusercontent.com/Desmondgoldsmith/Amazon_clone_1.0/main/public/Images/Baby240X-_SY170_CB468850909_.jpg" productImage4 = "https://raw.githubusercontent.com/Desmondgoldsmith/Amazon_clone_1.0/main/public/Images/Toys240X-_SY170_CB468851693_.jpg"  productName1 = "Computers & Acc" productName2 = "Video Games" productName3 = "Baby" productName4= "Toy & Games"/>
      <Product_category link = "shop now" header = "Health & Personal Care" productImage = "https://raw.githubusercontent.com/Desmondgoldsmith/Amazon_clone_1.0/main/public/Images/items.jpg" />
      </div>
      <div className='z-30 space-x-3  flex'>
      <Product_category link = "shop now" header = "Health & Personal Care" productImage = "https://raw.githubusercontent.com/Desmondgoldsmith/Amazon_clone_1.0/main/public/Images/items.jpg" />
      <Product_category link = "shop now" header = "Dresses" productImage = "https://raw.githubusercontent.com/Desmondgoldsmith/Amazon_clone_1.0/main/public/Images/Dresses.jpg" />
        <Mixed_component link = "see more" header = "Gaming Accessories"  productImage1 = "https://raw.githubusercontent.com/Desmondgoldsmith/Amazon_clone_1.0/main/public/Images/headset.jpg" productImage2 = "https://raw.githubusercontent.com/Desmondgoldsmith/Amazon_clone_1.0/main/public/Images/keyboard.jpg" productImage3 = "https://raw.githubusercontent.com/Desmondgoldsmith/Amazon_clone_1.0/main/public/Images/Mouse.jpg" productImage4 = "https://raw.githubusercontent.com/Desmondgoldsmith/Amazon_clone_1.0/main/public/Images/Chairs.jpg"  productName1 = "Headset" productName2= "Keyboard" productName3 = "Computer mice" productName4 = "Chairs" />
        <Product_category link = "shop now" header = "Electronics" productImage = "https://raw.githubusercontent.com/Desmondgoldsmith/Amazon_clone_1.0/main/public/Images/Dresses.jpg" />
      </div>
      </div>
  )
}

export default Category_component
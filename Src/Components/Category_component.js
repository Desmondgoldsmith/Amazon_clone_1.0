import React from 'react'
import Mixed_component from './Mixed_component'
import Product_category from './Product_category'
import Image from 'next/image'

function Category_component() {
  return (
    <div className='space-y-3 ml-2 mr-2 -mt-[30px] lg:mt-[-320px] md:-mt-[-320px]  overflow-x-scroll scrollbar-hide '>
      <div className='hidden lg:flex md:flex z-30 space-x-3  '>
      <Product_category link = "shop now" header = "Get fit at home" productImage = "https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_2x._SY608_CB434924743_.jpg" />
      <Product_category link = "shop now" header = "Easy returns" productImage = "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Returns_2x._SY608_CB432774709_.jpg" />
      <Mixed_component link = "shop now" background_color = "red-600" header = "Shop by category" productImage1 = "https://raw.githubusercontent.com/Desmondgoldsmith/Amazon_clone_1.0/main/public/Images/computer.jpg" productImage2 = "https://raw.githubusercontent.com/Desmondgoldsmith/Amazon_clone_1.0/main/public/Images/PS4.jpg" productImage3 = "https://raw.githubusercontent.com/Desmondgoldsmith/Amazon_clone_1.0/main/public/Images/Baby240X-_SY170_CB468850909_.jpg" productImage4 = "https://raw.githubusercontent.com/Desmondgoldsmith/Amazon_clone_1.0/main/public/Images/Toys240X-_SY170_CB468851693_.jpg"  productName1 = "Computers & Acc" productName2 = "Video Games" productName3 = "Baby" productName4= "Toy & Games"/>
      <div className='p-1  w-[400px] z-30 lg:h-[400px] md:h-[400px] sm:h-[50] space-y-7'>
        <div className='bg-white p-6'>
            <p className='font-extrabold text-xl'>Sign in for the best experience</p>
            <button className='p-1 bg-yellow-300 w-[280px] rounded-md hover:bg-yellow-500'>sign in securely</button>
        </div>
        <div>
            <Image 
            src = "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_D2_45M_en_US_2x._CB418309979_.jpg" 
            width={180}
            height={300}
            alt="Fuji"
            className = "w-[350px] h-[230px]"
            />
        </div>
      </div>
      </div>
      <div className='z-30 space-x-3  flex'>
      <Product_category link = "shop now" header = "Health & Personal Care" productImage = "https://raw.githubusercontent.com/Desmondgoldsmith/Amazon_clone_1.0/main/public/Images/items.jpg" />
      <Product_category link = "shop now" header = "Dresses" productImage = "https://raw.githubusercontent.com/Desmondgoldsmith/Amazon_clone_1.0/main/public/Images/Dresses.jpg" />
        <Mixed_component link = "see more" header = "Gaming Accessories"  productImage1 = "https://raw.githubusercontent.com/Desmondgoldsmith/Amazon_clone_1.0/main/public/Images/headset.jpg" productImage2 = "https://raw.githubusercontent.com/Desmondgoldsmith/Amazon_clone_1.0/main/public/Images/keyboard.jpg" productImage3 = "https://raw.githubusercontent.com/Desmondgoldsmith/Amazon_clone_1.0/main/public/Images/Mouse.jpg" productImage4 = "https://raw.githubusercontent.com/Desmondgoldsmith/Amazon_clone_1.0/main/public/Images/Chairs.jpg"  productName1 = "Headset" productName2= "Keyboard" productName3 = "Computer mice" productName4 = "Chairs" />
        <Product_category link = "shop now" header = "Electronics" productImage = "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg" />
      </div>
      </div>
  )
}

export default Category_component
import React,{useState} from 'react'
import Image from 'next/image'
import {useDispatch} from 'react-redux'
import {addToCart} from '../Slices/Cartslice'
import StarIcon from '@mui/icons-material/Star';

const max_rating =  5;
const min_rating = 1;

function ProductList({title,price,description,category,image,id}) {
    const dispatch = useDispatch()

     // randomize the star icon
  const [rating] = useState(
    Math.floor(Math.random() * (max_rating - min_rating + 1)) + min_rating
  )
  //  adding to cart
    const addCart = (e) =>{
      e.preventDefault();
       const product = {
            title,
            price,
            description,
            category,
            image,
            id
        }
    // dispatching 'products' as action to the reduux store
    dispatch(addToCart(product))
    }
  return (
    <div>
        <div className='flex md:flex lg:block space-x-2 lg:space-x-0 md:space-x-2  w-full md:w-full items-center lg:w-[220px]'>
         <div className='p-1 '>
          <Image 
          src = {image}
          alt = "product images"
          width = {150}
          height ={100}
          className ="w-[130px] h-[130px] md:w-[180px] md:h-[180px] lg:w-[220px] lg:h-[220px]"
          />
         </div>
          
          <div className = "p-2  w-full">
            {/* displays only on larg screen */}
            <p className = "hidden md:hidden lg:block text-[16px] font-semibold cursor-pointer truncate   hover:overflow-visible hover:whitespace-normal hover:ease-in hover:duration-300">{title}</p>
              {/* displays only on small and mid screens */}
              <p className = "block md:block lg:hidden text-[16px] font-semibold cursor-pointer truncate whitespace-normal  hover:overflow-visible hover:whitespace-normal hover:ease-in hover:duration-300">{title}</p>
              <div className = "text-yellow-500 flex">
        {/* randomize the star icons */}
            {/* {Array(rating).fill().map((_, i) =>( */}
              <StarIcon/>
              <StarIcon/>
              <StarIcon/>
        {/* ))} */}
            </div>

           
        <p>$<span className = "font-extrabold text-[18px]">{price}</span></p>   
        <button onClick = {(e)=>addCart(e)} className ="p-2 w-[180px] md:[180px] lg:w-[220px] rounded-md bg-yellow-500 hover:bg-yellow-600">Add to cart</button>
        
          </div>
          </div>
    </div>
  )
}

export default ProductList

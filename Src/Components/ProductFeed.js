import React,{useState} from 'react'
import {useDispatch} from "react-redux"
import addToCart from '../Slices/Cartslice'
import ProductList from "./ProductList"

const max_rating =  5;
const min_rating = 1;


function ProductFeed({products}) {

  const dispatch = useDispatch()

  const addCart = () => {
    const product ={
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

  // randomize the star icon
  const [rating] = useState(
    Math.floor(Math.random() * (max_rating - min_rating + 1)) + min_rating
  )
  return ( 
           <div className = "w-[1000px] p-2">
        <h1 className = "text-[20px] font-extrabold">RESULTS</h1>
        <p>Price and other details may vary based on product size and color.</p>
        {/* dixplay products */}
      <div className = "flex flex-wrap space-x-4 p-2">
        {products.map(({title,price,description,category,image,id})=>(
        <ProductList title={title} price={price} description={description} category={category} image = {image} id={id} key = {id}/>
        ))}
      </div>

       </div>
  )
}



export default ProductFeed

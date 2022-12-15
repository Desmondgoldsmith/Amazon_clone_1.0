import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Header from '../Components/Header'
import ProductFeed from '../Components/ProductFeed'
import { useRouter } from 'next/router';
import {useSelector} from 'react-redux'
import {selectItems} from '../Slices/Cartslice'



function All_products({products}) {
  const router = useRouter();
  const items = useSelector(selectItems)
    
  return (
    <div>
    <div className = "flex" >
    <div className = " w-[1280px] ">
      <Header/>

      {/* page content  */}
      <div className = "flex mt-5  ">
       <div className="w-[300px] p-2">
         <p className='text-[16px] font-extrabold'>Departments</p>
         <p className = "cursor-pointer hover:underline hover:text-orange-400 text-[13px]"><Link href="/#">Women's Fashion</Link> </p>
         <p className = "cursor-pointer hover:underline hover:text-orange-400 text-[13px]"><Link href="/#">Women's Shoes</Link> </p>
        <p className = "cursor-pointer hover:underline hover:text-orange-400 text-[13px]"><Link href="/#"> Women's Clothing</Link></p>
        <p className = "cursor-pointer hover:underline hover:text-orange-400 text-[13px]"><Link href="/#">Home & Kitchen</Link> </p>
        <p className = "cursor-pointer hover:underline hover:text-orange-400 text-[13px]"><Link href="/#">Men's Fashion</Link> </p>
        <p className = "cursor-pointer hover:underline hover:text-orange-400 text-[13px]"><Link href="/#">Boys' Fashion</Link> </p>
        <p className = "cursor-pointer hover:underline hover:text-orange-400 text-[13px]"><Link href="/#">Girls' Jewelry</Link> </p>
        <p className = "cursor-pointer hover:underline hover:text-orange-400 text-[13px]"><Link href="/#">Bath & Bathing Accessories</Link> </p>
       
        <p className='text-[16px] font-extrabold'>Customer Reviews</p>
          <div className = "text-yellow-500">
            <p className = "cursor-pointer text-[13px] "><Link href="/#">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
            </svg>
            </Link> </p> 
        </div>   

          <div className = " text-yellow-500">
            <p className = "cursor-pointer text-[13px]  "><Link className = "flex" href="/#">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                </svg>
              </Link> </p>
            </div>

        <div className = "text-yellow-500">
        <p className = "cursor-pointer text-[13px]"><Link className='flex' href="/#">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
        </svg>
        </Link></p>
    </div>

      <div className = " text-yellow-500">
          <p className = "cursor-pointer text-[13px]"><Link className='flex' href="/#">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
          </svg>
        </Link></p>
      </div>

    <div className = " text-yellow-500">
        <p className = "cursor-pointer text-[13px]"><Link className='flex' href="/#">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
        </svg>
        </Link></p>
      </div>

{/*  */}
      <p className='text-[16px] font-extrabold'>Amazon Fashion</p>
      <p className = "cursor-pointer hover:underline hover:text-orange-400 text-[13px]"><Link href= "/#">Our Brands</Link></p>
      <p className = "cursor-pointer hover:underline hover:text-orange-400 text-[13px]"><Link href= "/#">Premium Brands</Link> </p>
      <p className = "cursor-pointer hover:underline hover:text-orange-400 text-[13px]"><Link href= "/#">Popular Brands</Link></p>

      <p className='text-[16px] font-extrabold'>Brands</p>
      <p className = "cursor-pointer hover:underline hover:text-orange-400 text-[13px]"><Link href = "/#">JoycuFF</Link></p>
      <p className = "cursor-pointer hover:underline hover:text-orange-400 text-[13px]"><Link href = "/#">adidas</Link> </p>
      <p className = "cursor-pointer hover:underline hover:text-orange-400 text-[13px]"><Link href = "/#">UGG</Link>  </p>
      <p className = "cursor-pointer hover:underline hover:text-orange-400 text-[13px]"><Link href = "/#">Clarks</Link> </p>
      <p className = "cursor-pointer hover:underline hover:text-orange-400 text-[13px]"><Link href = "/#">Amazon Essentials</Link></p>
      <p className = "cursor-pointer hover:underline hover:text-orange-400 text-[13px]"><Link href = "/#">Crocs</Link> </p>
      <p className = "cursor-pointer hover:underline hover:text-orange-400 text-[13px]"><Link href = "/#">Leafael</Link></p>

      <p className='text-[16px] font-extrabold'> Price </p>
      <p className = "cursor-pointer hover:underline hover:text-orange-400 text-[13px]"><input type = "checkbox"></input>  Up to $25</p>
      <p className = "cursor-pointer hover:underline hover:text-orange-400 text-[13px]"><input type = "checkbox"></input> $25 to $50</p>
      <p className = "cursor-pointer hover:underline hover:text-orange-400 text-[13px]"><input type = "checkbox"></input> $50 to $100 </p>
      <p className = "cursor-pointer hover:underline hover:text-orange-400 text-[13px]"><input type = "checkbox"></input> $100 to $200 </p>
      <p className = "cursor-pointer hover:underline hover:text-orange-400 text-[13px]"><input type = "checkbox"></input> $200 & above </p>
        
       </div>
  {/* product feeds */}
    <ProductFeed products = {products} />
      </div>
    </div>


    {/* sidebar */}
    <div className = "w-[160px] p-2 text-center border border-l-black">
    {items.length == 0 ? 
    <p className= "font-bold text-[18px]">Cart is empth !</p>
    :
    <p className ="text-sm font-bold">Subtotal</p>
    <p className = "text-red-900 font-bold">$200</p>
    <button onClick = {()=>router.push('/Cart')} className = "w-[140px] p-2 rounded-lg bg-gray-300">Go to cart</button>
    {/* cart products preview */}
    <div className = "mt-5 mb-2">
    <Image
          src = "https://m.media-amazon.com/images/I/51LS7arqYHL._AC_SY200_.jpg"
          width ={50}
          height = {50}
          className = "w-[150px] h-[150px]"
        />
        <p className = "text-base font-bold text-center">$ 1.00</p>
        <div className ="flex space-x-1">
        <select className='bg-gray-200 outline-none border border-gray-200 p-2 rounded-md' name="" id="">
                  <option value="Qty:1">Qty:1</option>
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                  <option value="">5</option>
                  <option value="">6</option>
                  <option value="">7</option>
                  <option value="">8</option>
                  <option value="">9</option>
                  <option value="">10+</option>
                </select>
          <button className = "rounded-md bg-gray-200 p-2 ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clipRule="evenodd" />
      </svg>
      
          </button>

          
        </div>
    </div>
    <hr/>
    }
    </div>
    </div>
    </div>

    
  )
  
}

// 
export async function getServerSideProps(context){
  const products = await fetch("https://fakestoreapi.com/products").then(
      (res) => res.json()
  );
  return{
    props:{
      products,
  }
  }
}


export default All_products
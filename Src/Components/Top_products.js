import React,{useRef} from 'react'
import Top_Apparels from './Top_Apparels'
import Top_books from './Top_books'

function Top_products() {
  const lisrRef = useRef(null)
  const leftScroll = () => {
    if (lisrRef.current) {
          lisrRef.current.scrollBy({
            top: 0,
            left:200,
            behavior:'smooth'
          })
        }
  }
  const rightScroll = () => {
    if (lisrRef.current) {
          lisrRef.current.scrollBy({
            top: 0,
            left:-200,
            behavior:'smooth'
          })
        }
  }
  return (
    <div> 
    {/* rendering the Top_books component here */}
    <div className='h-[250px] ml-8 mr-11 mb-5 mt-3 bg-white '>
  <p className='pl-8 text-lg font-bold'>Top sellers in books for you</p>
    <div className='flex items-center'>
      <div className = "text-dark p-1 hover:rounded-full hover:bg-gray-500 hover:text-white cursor-pointer" onClick={leftScroll}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ">
      <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clipRule="evenodd" />
        </svg>
    </div> 
    <div className='flex overflow-x-scroll scrollbar-hide' ref = {lisrRef}>
      <Top_books  productImage = "https://m.media-amazon.com/images/I/51LS7arqYHL._AC_SY200_.jpg"/>
      <Top_books productImage = "https://m.media-amazon.com/images/I/51Mj5OtsMvL._AC_SY200_.jpg"/>
      <Top_books productImage = "https://m.media-amazon.com/images/I/51XZJwsgnmL._AC_SY200_.jpg"/>
      <Top_books productImage = "https://m.media-amazon.com/images/I/61bPiEPsl4L._AC_SY400_.jpg"/>
      <Top_books productImage = "https://m.media-amazon.com/images/I/61odCjaagJL._AC_SY400_.jpg"/>
      <Top_books productImage = "https://m.media-amazon.com/images/I/61hXNZ7p0-S._AC_SY200_.jpg"/>
      <Top_books productImage = "https://m.media-amazon.com/images/I/61NnZ4V1nhL._AC_SY200_.jpg"/>
      <Top_books productImage = "https://m.media-amazon.com/images/I/61tKEVbKaQL._AC_SY400_.jpg"/>    
      <Top_books productImage = "https://m.media-amazon.com/images/I/61bPiEPsl4L._AC_SY400_.jpg"/>
      <Top_books productImage = "https://m.media-amazon.com/images/I/61odCjaagJL._AC_SY400_.jpg"/>
      <Top_books productImage = "https://m.media-amazon.com/images/I/61hXNZ7p0-S._AC_SY200_.jpg"/>
      <Top_books productImage = "https://m.media-amazon.com/images/I/51XZJwsgnmL._AC_SY200_.jpg"/>
      <Top_books productImage = "https://m.media-amazon.com/images/I/61NnZ4V1nhL._AC_SY200_.jpg"/>
      <Top_books productImage = "https://m.media-amazon.com/images/I/61tKEVbKaQL._AC_SY400_.jpg"/>    
      <Top_books  productImage = "https://m.media-amazon.com/images/I/51LS7arqYHL._AC_SY200_.jpg"/>
      <Top_books productImage = "https://m.media-amazon.com/images/I/51Mj5OtsMvL._AC_SY200_.jpg"/>
      </div>
    <div className = "text-dark p-1 hover:rounded-full hover:bg-gray-500 hover:text-white cursor-pointer" onClick={rightScroll}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
  </svg>
   </div> 
   </div>
    </div>

    {/* Rendering the apparel top products here from the Top_apparel component  */}
    <div className='h-[250px] ml-8 mr-11 mb-20 bg-white '>
  <p className='pl-8 text-lg font-bold'>Popular products in Apparel internationally</p>
    <div className='flex items-center'>
      <div className = "text-dark p-1 hover:rounded-full hover:bg-gray-500 hover:text-white cursor-pointer" onClick={leftScroll}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ">
      <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clipRule="evenodd" />
        </svg>
    </div> 
    <div className='flex overflow-x-scroll scrollbar-hide' ref = {lisrRef}>
      <Top_Apparels  productImage = "https://m.media-amazon.com/images/I/81hzTjKhYrL._AC_SY400_.jpg"/>
      <Top_Apparels productImage = "https://m.media-amazon.com/images/I/61mqHQ-erjL._AC_SY400_.jpg"/>
      <Top_Apparels productImage = "https://m.media-amazon.com/images/I/81SIV3HimyL._AC_SY400_.jpg"/>
      <Top_Apparels productImage = "https://m.media-amazon.com/images/I/71DEBeVBnmL._AC_SY400_.jpg"/>
      <Top_Apparels productImage = "https://m.media-amazon.com/images/I/71r8rv62cZL._AC_SY400_.jpg"/>
      <Top_Apparels productImage = "https://m.media-amazon.com/images/I/81s5Hcf4VcL._AC_SY400_.jpg"/>
      <Top_Apparels productImage = "https://m.media-amazon.com/images/I/71okvN+6QiL._AC_SY400_.jpg"/>
      <Top_Apparels productImage = "https://m.media-amazon.com/images/I/61tKEVbKaQL._AC_SY400_.jpg"/>    
      <Top_Apparels productImage = "https://m.media-amazon.com/images/I/61bPiEPsl4L._AC_SY400_.jpg"/>
      <Top_Apparels productImage = "https://m.media-amazon.com/images/I/61odCjaagJL._AC_SY400_.jpg"/>
      <Top_Apparels productImage = "https://m.media-amazon.com/images/I/61hXNZ7p0-S._AC_SY200_.jpg"/>
      <Top_Apparels productImage = "https://m.media-amazon.com/images/I/51XZJwsgnmL._AC_SY200_.jpg"/>
      <Top_Apparels productImage = "https://m.media-amazon.com/images/I/61NnZ4V1nhL._AC_SY200_.jpg"/>
      <Top_Apparels productImage = "https://m.media-amazon.com/images/I/61tKEVbKaQL._AC_SY400_.jpg"/>    
      <Top_Apparels  productImage = "https://m.media-amazon.com/images/I/51LS7arqYHL._AC_SY200_.jpg"/>
      <Top_Apparels productImage = "https://m.media-amazon.com/images/I/51Mj5OtsMvL._AC_SY200_.jpg"/>
      </div>
    <div className = "text-dark p-1 hover:rounded-full hover:bg-gray-500 hover:text-white cursor-pointer" onClick={rightScroll}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
  </svg>
   </div> 
   </div>
    </div>
   
   
  </div>
   
  )
}

export default Top_products
import Head from 'next/head'
import Banner from '../Components/Banner'
import Category_component from '../Components/Category_component'
import Header from '../Components/Header'
import Top_fittness_and_Toys from '../Components/Top_fittness_and_Toys'
import Top_products from '../Components/Top_products'
import Footer_1 from '../Components/Footer_1'
import Footer_2 from '../Components/Footer_2'
import Footer from '../Components/Footer[mobile_1]'
import MobileFooter2 from '../Components/MobileFooter2'


export default function Home({Trends}) {

return (
    <div className = 'bg-[rgb(230,232,232)]'>
      <Head>
        <title>Amazon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* header section */}
      <Header />

      <main>
        {/* product banner */}
        <Banner/>
        {/* category card */}
        <Category_component />
        {/* gift component */}
        <Top_products Trends = {Trends}/>
        {/* fitness and Toys component */}
        <Top_fittness_and_Toys/>
      </main>
      
       <footer>
       {/* footer for pcs */}
       <Footer_1/>        
       <Footer_2/>   
{/* footer for mobile devices */}
       <Footer/>
       <MobileFooter2/>     
      </footer>
    </div>
   
  )
}

export async function getServerSideProps(context){
  const Trends = await fetch("https://fakestoreapi.com/products").then(
      (res) => res.json()
  );

  return{
    props:{
      Trends,
      
  }
  }
}



// dependencies
// npm i react-transition-group - react transition group
import Head from 'next/head'
import Banner from '../Components/Banner'
import Category_component from '../Components/Category_component'
import Header from '../Components/Header'
import Top_fittness_and_Toys from '../Components/Top_fittness_and_Toys'
import Top_products from '../Components/Top_products'

export default function Home() {

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
        <Top_products/>
        {/* fitness and Toys component */}
        <Top_fittness_and_Toys/>
      </main>
    </div>
  )
}

// dependencies
// npm i react-transition-group - react transition group
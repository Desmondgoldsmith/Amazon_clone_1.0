import Head from 'next/head'
import Banner from '../Components/Banner'
import Category_component from '../Components/Category_component'
import Header from '../Components/Header'

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
        <Category_component />
      </main>
    </div>
  )
}

// dependencies
// npm i react-transition-group - react transition group
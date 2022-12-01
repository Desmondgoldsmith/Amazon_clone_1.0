import Head from 'next/head'
import Banner from '../Components/Banner'
import Header from '../Components/Header'
import Subnavcontent from '../Components/Subnavcontent'

export default function Home() {

return (
    <div>
      <Head>
        <title>Amazon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* header section */}
      <Header />

      <main>
        {/* product banner */}
        <Banner/>
      </main>
    </div>
  )
}

// dependencies
// npm i react-transition-group - react transition group
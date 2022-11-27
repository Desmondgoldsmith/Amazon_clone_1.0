import Head from 'next/head'
import Header from '../Components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Amazon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* header section */}
      <Header />
    </div>
  )
}

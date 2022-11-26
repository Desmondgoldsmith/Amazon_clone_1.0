import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Amazon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className='text-2xl font-bold underline text-red-600'>Hello World</h1>
    </div>
  )
}

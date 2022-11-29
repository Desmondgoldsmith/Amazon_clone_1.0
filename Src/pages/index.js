import Head from 'next/head'
import Header from '../Components/Header'
import Sidenav from '../Components/Sidenav'

export default function Home() {
  const [openNav, setOpenNav] = useState(false)
   return (
    <div>
      <Head>
        <title>Amazon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* header section */}
      <Header />
      <Sidenav/>
    </div>
  )
}

// dependencies
// npm i react-transition-group - react transition group
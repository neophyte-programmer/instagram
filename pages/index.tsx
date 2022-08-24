import type { NextPage } from 'next'
import Head from 'next/head'
import {Header, Feed, Modal, Footer} from '../components/components'

const Home: NextPage = () => {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Instagram</title>
        <link rel="icon" type='image/png' href="/logo.png" />
      </Head>

      <Header />
      <Feed />
      <Modal />
      <Footer />
    </div>
  )
}

export default Home

import type { NextPage } from 'next'
import Head from 'next/head'
import {Header} from '../components/components'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Instagram</title>
        <link rel="icon" type='image/png' href="/logo.png" />
      </Head>

      <Header />
    </div>
  )
}

export default Home

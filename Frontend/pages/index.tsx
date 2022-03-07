import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../Components/Header'
import { Hero } from '../Components/Hero'

const Home: NextPage = () => {
  return (
    <div className="h-screen">
      <Head>
        <title>Meduim Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">
        <Header />
        <div>
          <Hero />
        </div>
      </div>
    </div>
  )
}

export default Home

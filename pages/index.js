import Head from 'next/head'
import styles from '../styles/Home.module.css'
import HeroSection from '../components/HeroSection'
import ProductsCards from '../components/ProductsCards'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
          <HeroSection />
      </main>
          <ProductsCards />
    </div>
  )
}

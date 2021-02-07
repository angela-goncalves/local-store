import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import HeroSection from '../components/HeroSection'
import ProductsCards from '../components/ProductsCards'
import Categories from '../components/Categories'

export default function Home() {
  return (
    <div className="container bg-blue-50">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
          <HeroSection />
          <Categories />
      </main>
          <ProductsCards />
    </div>
  )
}

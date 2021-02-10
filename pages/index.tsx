import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import Link from "next/link"
// import Categories from '../components/Categories'

export default function Home() {
  return (
    <div className="container bg-blue-50">
      <Head>
        <title>Local Store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
          <Link href="store"><a>Stores</a></Link>
      </main>
    </div>
  )
}

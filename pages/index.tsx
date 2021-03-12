import Head from 'next/head'
import Link from "next/link"


export default function Home() {
  return (
    <div className="w-full bg-blue-50">
      <Head>
        <title>Local Store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full">
          <Link href="store"><a>Stores</a></Link>
        
      </main>
    </div>
  )
}

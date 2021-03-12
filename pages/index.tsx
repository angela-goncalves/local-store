import Head from 'next/head'
import Link from "next/link"


export default function Home() {
  return (
    <div className="w-full ">
      <Head>
        <title>Local Store</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:wght@600&display=swap" rel="stylesheet"/>
      </Head>
      <main className="w-screen h-screen flex flex-col justify-center place-items-center">
        <h1 className = "text-3xl mb-10" >Welcome to...</h1>
        
          <Link href="store">
            <a className = "font-h1 mb-10 text-xl underline">Stores</a>
          </Link>
        
      </main>
    </div>
  )
}

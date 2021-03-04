import Head from 'next/head'
import Link from "next/link"


export default function Home() {
  return (
    <div className="w-full bg-blue-50">
      <Head>
        <title>Local Store</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:wght@600&display=swap" rel="stylesheet"/>
      </Head>
      <main className="w-screen h-screen flex flex-col justify-center place-items-center">
        <h1 className = "font-h1 mb-10" >Welcome to...</h1>
        <button className = "rounded-2xl py-1 w-32 text-white bg-purple-500">
          <Link href="store"><a>Stores</a></Link>
        </button>
      </main>
    </div>
  )
}

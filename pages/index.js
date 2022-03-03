import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Anime batch sub indo" />
        <p className="description">
         <Link>
          <a href="https://adikanime.com">Adikanime</a>
        </Link> merupakan website download anime batch sub indo terupdate dan terlengkap.</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}

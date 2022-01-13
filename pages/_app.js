import '../styles/global.css'
import Header from '../components/header'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
    return (

        <div className="antialiased text-gray-700">
            <Head>
                <title>\home\berkay</title>
            </Head>
            <Header />
            <main className="pt-24 mt-6 mb-20">
                <Component {...pageProps} />
            </main>
        </div>
    )
}

export default MyApp
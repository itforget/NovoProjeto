import '@/styles/globals.css'
import Head from 'next/head'
export default function MyApp({ Component, pageProps }) {
 return (
     <>
          <Head>
          <title>Meu Portifolio</title>
          </Head>
          <Component  {...pageProps} />
     </>

 
 );
}


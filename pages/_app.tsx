
import '../src/App.css';
import Head from 'next/head'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <>
    <Head>
        <link rel='shortcut icon' href='/Personal-Website/favicon.ico'/>
        <link rel="manifest" href="/Personal-Website/manifest.json" />
        <link rel="apple-touch-icon" href="/Personal-Website/logo192.png" />
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
        <title>Gavin Gosling</title>
    </Head>
    <Component {...pageProps} />
  </>
}
import { useEffect } from 'react';
import '../src/App.css';
import Head from 'next/head'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {

  useEffect(() => {
    if("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
       navigator.serviceWorker.register("sw.js", {scope: './'}).then(
          function (registration) {
            console.log("Service Worker registration successful with scope: ", registration.scope);
          },
          function (err) {
            console.log("Service Worker registration failed: ", err);
          }
        );
      });
    }
  }, [])

  return <>
    <Head>
        <link rel='shortcut icon' href='/favicon.ico'/>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
        <title>Gavin Gosling</title>
    </Head>
    <Component {...pageProps} />
  </>
}
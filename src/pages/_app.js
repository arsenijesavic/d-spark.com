import '../styles/globals.css'

import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>D.Spark</title>
      </Head>
      <Component {...pageProps} />
      <style global jsx>{`
        @font-face {
          font-family: 'NeuePixel';
          font-style: normal;
          font-weight: 900;
          src: url('/font/NeuePixelGrotesk_Regular.woff') format('woff');
        }

        @font-face {
          font-family: 'HelveticaNeue';
          font-style: normal;
          font-weight: 500;
          src: url('/font/HelveticaNeueLTStd-Roman.otf') format('opentype');
        }

        * {
          font-family: 'HelveticaNeue', sans-serif;
          font-weight: 500;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: 'NeuePixel', sans-serif;
          font-weight: 600;
          font-size: 100%;
        }
      `}</style>
    </>
  )
}

export default MyApp

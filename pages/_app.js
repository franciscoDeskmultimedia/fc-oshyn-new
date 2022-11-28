import '../styles/globals.scss'

import { AnimatePresence } from 'framer-motion' 
// import { HubspotProvider } from 'next-hubspot';
import Script from 'next/script';

import { Rubik, Sora, Lobster, Hind } from '@next/font/google';
import Layout from '../components/Layout';


const rubik = Rubik({
  subsets: ['latin'],
})

const sora = Sora({
  subsets: ['latin'],
})

const lobster = Lobster({
  subsets: ['latin'],
  weight: '400'
})

const hind = Hind({
  subsets: ['latin'],
  weight: '400'
})

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />

      <Script strategy="afterInteractive">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
              });
          `}
      </Script>
      <AnimatePresence>
        <Layout>
          <main className={`${lobster.variable} ${sora.variable} ${rubik.variable}`}>
            {/* <HubspotProvider> */}
              <Component {...pageProps} />
            {/* </HubspotProvider> */}
            <style jsx global>
              {`
                :root {
                  --lobster-font: ${lobster.style.fontFamily};
                  --sora-font: ${sora.style.fontFamily};
                  --rubik-font: ${rubik.style.fontFamily};
                  --hind-font: ${hind.style.fontFamily};
                }
              `}
            </style>
          </main>
        </Layout>
      </AnimatePresence>
      </>
  )
}

export default MyApp
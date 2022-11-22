import '../styles/globals.scss'

import { AnimatePresence } from 'framer-motion' 


import { Rubik, Sora, Lobster, Hind } from '@next/font/google';

import { HubspotProvider } from 'next-hubspot';
import Layout from '../components/Layout';
import { getNav } from '../lib/api';



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
  {/* <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QV1J61L9E1&amp;l=dataLayer&amp;cx=c"
          strategy="afterInteractive"
        />
        <Script
          src="https://www.google-analytics.com/analytics.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://www.googletagmanager.com/gtm.js?id=GTM-K3LDM79"
          strategy="afterInteractive"
        />
        <Script strategy="afterInteractive">
          {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-K3LDM79')
          `}
        </Script> */}
  return (
    <HubspotProvider>
      <AnimatePresence>
        <Layout>
          <main className={`${lobster.variable} ${sora.variable} ${rubik.variable}`}>
            <Component {...pageProps} />
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
    </HubspotProvider> 
  )
}

export default MyApp
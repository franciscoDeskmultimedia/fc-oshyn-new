import '../styles/globals.scss'

import { AnimatePresence } from 'framer-motion' 


import { Rubik, Sora, Lobster } from '@next/font/google';



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

function MyApp({ Component, pageProps }) {

  return (
    <AnimatePresence initial={false} >
      <main className={`${lobster.variable} ${sora.variable} ${rubik.variable}`}>
        <Component {...pageProps} />
        <style jsx global>
          {`
            :root {
              --lobster-font: ${lobster.style.fontFamily};
              --sora-font: ${sora.style.fontFamily};
              --rubik-font: ${rubik.style.fontFamily};
            }
          `}
        </style>
      </main>
    </AnimatePresence>
  )
  
  
}

export default MyApp

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Navigation from '../components/navigation'
import HomepageHero from '../components/homepageHero'

import { getHomePage, getNav, getForm } from '../lib/api'

import { motion } from 'framer-motion';
import SliderCta from '../components/SliderCta'
import Carousel from '../components/Carousel'
import TabSlider from '../components/TabSlider'
import TestimonySlider from '../components/TestimonySlider'
import TabSection from '../components/TabSection'
import { useEffect, useState } from 'react'
import Script from 'next/script'

export default function Home({homepage, nav, formAssembly}) {
  
  const navigationItems = nav.nav.navItemCollection.items;
  const [theForm, setTheForm] = useState('')

  useEffect(() => setTheForm(formAssembly), [])

  return (
    <>
      <Head>
        <title>Oshyn New page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="referrer" content="no-referrer-when-downgrade"></meta>
        

        
        <link rel="icon" href="/favicon.ico" />
      </Head>
        
      <motion.div initial={{opacity:0}} exit={{opacity:0}} animate={{opacity:1}} >
        <Navigation navItems={navigationItems}></Navigation>
        <div dangerouslySetInnerHTML={{__html: `${theForm}`}}></div>
        {/* {{formAssembly}} */}

        
        {homepage.page.blocksCollection.items.map((item,index)=>{

          if(item.__typename == "Slider"){
            return(
              <section key={index} className='homepage-hero min-h-screen -mt-40 pt-40 w-full bg-background pb-24  z-0' >
                <HomepageHero key={index} slider={item.sliderItemsCollection.items} tabSlider={item.tabSlider}></HomepageHero>
              </section>
            )
          }

          if(item.__typename == "RelatedServicesSlider"){
            return(
              <section key={index} className='related-services py-20 px-10 w-full'>
                <Carousel 
                  type='service'
                  cardSlides={item.relatedServicesCollection.items} 
                  title={item.title}
                  description={item.description}
                />
              </section>
            )
          }
          if(item.__typename == "SliderCta"){
            return(
              <section key={index} className='slider-cta pt-36 px-10 w-full bg-slate-900'>
                <SliderCta slides={item}></SliderCta>
              </section>
            )
          }
          if(item.__typename == 'InsightSlider'){
            return(
              <section key={index} className='insight py-20 px-10 w-full'>
                <Carousel 
                  type='post'
                  arrows='true'
                  cardSlides={item.slideCollection.items} 
                  title={item.title}
                  description={item.description}
                  cta={item.ctaCollection.items}
                />
              </section>
            )
          }
          if(item.__typename == 'TabSlider'){
            return(
              <section key={index} className='tab-slider py-20 px-10 w-full'>
                <TabSlider tabs={item} />
              </section>
            )
          }
          if(item.__typename == 'TestimonySlider'){
            return(
              <section key={index} className='testimony-slider py-20 px-10 w-full'>
                <TestimonySlider title={item.title} description={item.description} slides={item.testimoniesCollection.items}/>
              </section>
            )
          }
          if(item.__typename == 'TabSection'){
            
            return(
              <section key={index} className='tabs py-20 px-10 w-full bg-gray-100'>
                {/* <HubspotProvider > */}
                <TabSection tabs={item}></TabSection>
                {/* </HubspotProvider> */}
              </section>
            )
          }

          


        })}

      
      </motion.div>

    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const homepage = (await getHomePage(preview)) ?? [];
  const nav = (await getNav(preview)) ?? [];
  const formAssembly = (await getForm(33));
  return {
    props: { preview, homepage, nav, formAssembly },
    revalidate: 20
  }
}
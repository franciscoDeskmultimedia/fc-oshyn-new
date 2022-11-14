import Head from "next/head";
import Navigation from "../../components/navigation";

import ServicesHero from "../../components/servicesHero";

import { getAllServicesWithSlug, getService, getNav } from "../../lib/api"

const Services = ({service, nav})=>{
    if(!service){
        return(
            <p>Loading</p>
        ) 
    }else{
        const serviceItem = service[0];
        console.log(serviceItem)
        // console.log(nav)
        const navigationItems = nav.nav.navItemCollection.items;
        return(
            <>
                <Head>
                    <title>Oshyn Service || {serviceItem.title} </title>
                    <meta name="description" content="Oshyn service" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <main className=" bg-red-50">
                    <Navigation navItems={navigationItems}></Navigation> 
                    <ServicesHero 
                        title={serviceItem.hero.title} 
                        description={serviceItem.hero.description}
                        cta={{
                            link : serviceItem.hero.cta.url,
                            text: serviceItem.hero.cta.text
                        }}
                        image={{
                            url: serviceItem.hero.image.url,
                            width: serviceItem.hero.image.width,
                            height: serviceItem.hero.image.height,
                            title: serviceItem.hero.image.title


                        }}
                    />
                    
                    {/* <ServicesHero title="test"></ServicesHero> */}
                </main>
            </>
        )
    }
    
}

export async function getStaticPaths() {
    const services = await getAllServicesWithSlug();
    return {
        paths: services?.map(({ slug }) => `/services/${slug}`) ?? [],
        fallback: "blocking",
    }
}

export async function getStaticProps({ params, preview = false }) {

    const data = await getService(params.slug, preview);
    const nav = (await getNav(preview)) ?? []
    return {
        props: {
            preview,
            service: data?.services ?? null,
            nav: nav
        },
        revalidate:3
    }
}
  


export default Services;
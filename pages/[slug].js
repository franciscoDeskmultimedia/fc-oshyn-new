import BasicHero from "../components/BasicHero copy";
import { getAllPagesWithSlug, getPage, getNav } from "../lib/api";
import Head from "next/head";
import Navigation from "../components/navigation";

const BasicPage = ({page, nav})=>{
    const navigationItems = nav.nav.navItemCollection.items;
    return(
        <>
        <Head>
            <title>Oshyn Service || {page.title} </title>
            <meta name="description" content="Oshyn service" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
            <Navigation navItems={navigationItems}></Navigation>
            <section className='homepage-hero min-h-screen -mt-40 pt-40 w-full bg-background pb-24' >
                <BasicHero title={page.title} description={page.description}></BasicHero>
            </section>
        </main>
        </>
    )
}

export async function getStaticPaths() {
    const pages = await getAllPagesWithSlug();
    return {
        paths: pages?.map(({ slug }) => `/${slug}`) ?? [],
        fallback: "blocking",
    }
}

export async function getStaticProps({ params, preview = false }) {

    const data = await getPage(params.slug, preview);
    const nav = (await getNav(preview)) ?? []
    return {
        props: {
            preview,
            page: data?.page[0] ?? null,
            nav: nav
        },
        revalidate:3
    }
}

export default BasicPage
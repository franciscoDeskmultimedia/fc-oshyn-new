const MAINNAV = `
  slug
  title
  navItemCollection(limit:20){
    items{
      text
      url
      subnav{
        text
        quickLinkText
        quickLink
        subnavItemsCollection(limit:20){
          items{
            icon{
              title
              url
              width
              height
            }
            title
            description
            link
          }
        }
        blocksCollection(limit:2){
          items{
            __typename
            ... on ImageBlock{
              title
              image{
                title
                url
                width
                height
              }
            }
            ... on CtaTextBlock{
              title
              description
              ctaCollection(limit:2){
                items{
                  text
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`

const HOMEPAGE = `
title
slug
blocksCollection(limit:10){
  items{
    __typename
    ... on RelatedServicesSlider{
      title
      description
      relatedServicesCollection(limit:10){
        items{
          slug
          title
          exerpt
          featuredImage{
            width
            height
            url
            title
          }
        }
      }
      
    }
    ... on Slider{
      sliderItemsCollection(limit:10){
        items{
          title
          description{
            json
          }
          cta{
            text
            url
          }
          image{
            url
            height
            width
            title
          }
        }
      }
      tabSlider{
        title
        description
        sliderCollection(limit:20){
          items{
            title
            logosCollection(limit:20){
              items{
                title
                url
                width
                height
              }
            }
          }
        }
      }
    }
    ... on SliderCta{
      slidesCollection(limit:10){
        items{
           title
          description{
            json
          }
          cta{
            text
            url
          }
          image{
            url
            height
            width
            title
          }
        }
      }
    }
    ... on InsightSlider{
      title
      description
      ctaCollection(limit:5){
        items{
          text
          url
        }
      }
      slideCollection(limit:10){
        items{
          slug
          title
          author{
            name
            picture{
              title
              url
              width
              height	
            }
          }
          featuredImage{
            title
            url
            width
            height
          }
          
        }
      }
    }
    ... on TabSlider{
      title
      description
      sliderCollection(limit : 3){
        items{
          title
          logosCollection(limit:20){
            items{
              title
              url
              width
              height
            }
          }
        }
      }
    }
    ... on TestimonySlider{
      title
      description
      testimoniesCollection(limit : 10){
        items{
          testimonyImage{
            title
            url
            width
            height
          }
          name
          position
          company
          testymony
        }
      }
    }
    ... on TabSection{
      title
      tabCollection(limit:3){
        items{
          tabTitle
          tab{
            __typename
            ... on Content{
              title
              content{
                json
              }
            }
            ... on HubspotForm{
              portalId
              formId
            }
            ... on Iframe{
              iframe
            }
          }
        }
      }
    }
  }
}
`

const PAGE = `
title
slug
description
blocksCollection(limit:10){
  items{
    __typename
    ... on RelatedServicesSlider{
      title
      description
      relatedServicesCollection(limit:10){
        items{
          slug
          title
          exerpt
          featuredImage{
            width
            height
            url
            title
          }
        }
      }
      
    }
    ... on Slider{
      sliderItemsCollection(limit:10){
        items{
          title
          description{
            json
          }
          cta{
            text
            url
          }
          image{
            url
            height
            width
            title
          }
        }
      }
      tabSlider{
        title
        description
        sliderCollection(limit:20){
          items{
            title
            logosCollection(limit:20){
              items{
                title
                url
                width
                height
              }
            }
          }
        }
      }
    }
    ... on SliderCta{
      slidesCollection(limit:10){
        items{
           title
          description{
            json
          }
          cta{
            text
            url
          }
          image{
            url
            height
            width
            title
          }
        }
      }
    }
    ... on InsightSlider{
      title
      description
      ctaCollection(limit:5){
        items{
          text
          url
        }
      }
      slideCollection(limit:10){
        items{
          slug
          title
          author{
            name
            picture{
              title
              url
              width
              height	
            }
          }
          featuredImage{
            title
            url
            width
            height
          }
          
        }
      }
    }
    ... on TabSlider{
      title
      description
      sliderCollection(limit : 3){
        items{
          title
          logosCollection(limit:20){
            items{
              title
              url
              width
              height
            }
          }
        }
      }
    }
    ... on TestimonySlider{
      title
      description
      testimoniesCollection(limit : 10){
        items{
          testimonyImage{
            title
            url
            width
            height
          }
          name
          position
          company
          testymony
        }
      }
    }
    ... on TabSection{
      title
      tabCollection(limit:3){
        items{
          tabTitle
          tab{
            __typename
            ... on Content{
              title
              content{
                json
              }
            }
            ... on HubspotForm{
              portalId
              formId
            }
            ... on Iframe{
              iframe
            }
          }
        }
      }
    }
  }
}
`

const SERVICES = `
  slug
  title
  featuredImage{
    width
    height
    url
    title
  }
  hero{
    title
    description
    cta{
      text
      url
    }
    image{
      url
      height
      width
      title
    }
  }
  blockCollection(limit:20){
    items{
      __typename
      ... on ThreeColIconDescription{
        title
        description
        itemsCollection(limit:3){
          items{
            title
            description
            icon{
              height
              width
              url
              title
            }
          }
        }
      }
    }
  }
`

const BLOGS = `
  sys{
    id
  }
  contentfulMetadata{
    tags{
      id
      name
    }
  }
  slug
  title
  body{
    json
  }
  date
  featuredImage{
    title
    url
    width
    height
  }
  author{
    name
    picture{
      title
      url
      width
      height
    }
  }
  type{
    title
  } 
`

// fetch 
async function fetchGraphQL(query, preview = false) {
    return fetch(
      `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${
            preview
              ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
              : process.env.CONTENTFUL_ACCESS_TOKEN
          }`,
        },
        body: JSON.stringify({ query }),
      }
    ).then((response) => response.json())
}

function extractData(fetchResponse) {
    return fetchResponse?.data?.page
}

export async function getAllPagesWithSlug() {
    const entries = await fetchGraphQL(
        `query {
          pageCollection(where: { slug_exists: true }, limit:100) {
              items {
                slug
                title
              }
          }
        }`
    )
    return entries?.data?.pageCollection?.items
}

export async function getPage(slug, preview) {
    const entry = await fetchGraphQL(
        `query {
          pageCollection(where: { slug: "${slug}" }, preview: ${preview ? 'true' : 'false'}, limit: 1) {
            items {
             ${PAGE}
            }
        }
        }`,
        preview
    )
    return {
        page: entry?.data?.pageCollection?.items,
    }
}

export async function getHomePage(slug, preview) {
    const entry = await fetchGraphQL(
        `query {
            page(id:"3nlhwu4O27OgWijpshaoId" , preview: ${preview ? 'true' : 'false'}) {
                ${HOMEPAGE}
            }
        }`,
        preview
    )

    return {
        page: extractData(entry),
    }
}

export async function getNav(slug, preview) {
  const entry = await fetchGraphQL(
      `query {
          navigation(id:"fSXzT5Rd4134rDJALvEdz" , preview: ${preview ? 'true' : 'false'}) {
              ${MAINNAV}
          }
      }`,
      preview
  )

  return {
      nav: entry.data.navigation,
  }
}

export async function getAllServicesWithSlug() {
  const entries = await fetchGraphQL(
      `query {
        servicesColection(where: { slug_exists: true }) {
            items {
              ${SERVICES}
            }
        }
      }`
  )
  return entries?.data?.servicesCollection?.items
}

export async function getService(slug, preview) {
  const entry = await fetchGraphQL(
      `query {
        servicesCollection(where: { slug: "${slug}" }, preview: ${
      preview ? 'true' : 'false'
      }, limit: 1) {
          items {
           ${SERVICES}
          }
      }
      }`,
      preview
  )

  return {
      services: entry?.data?.servicesCollection?.items,
  }
}

export async function getAllBlogsWithSlug() {
  const entries = await fetchGraphQL(
      `query {
        blogCollection(where: { slug_exists: true }) {
            items {
              ${BLOGS}
            }
        }
      }`
  )
  return entries?.data?.blogCollection?.items
}

export async function getBlog(slug, preview) {
  const entry = await fetchGraphQL(
      `query {
        blogCollection(where: { slug: "${slug}" }, preview: ${
      preview ? 'true' : 'false'
      }, limit: 1) {
          items {
           ${BLOGS}
          }
      }
      }`,
      preview
  )

  return {
      services: entry?.data?.blogCollection?.items,
  }
}
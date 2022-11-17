const MAINNAV = `
  slug
  title
  navItemCollection(limit:20){
    items{
      text
      url
      navFeaturedImage{
        title
        navFeaturedImage{
          url
          width
          height
          title
        }
      }
      navFeaturedService{
        title
        description
        navCta{
          text
          url
        }
      }
      subNavCollection(limit:15){
        items{
          icon{
            url
            width
            height
            title
          }
          text
          description
          url
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
  }
}
`

const PAGE = `
slug
title
blocksCollection(limit:10){
  items{
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
        pageColection(where: { slug_exists: true }, order: date_DESC) {
            items {
            ${PAGE}
            }
        }
        }`
    )
    return extractPostEntries(entries)
}

export async function getPage(slug, preview) {
    const entry = await fetchGraphQL(
        `query {
        pageCollection(where: { slug: "${slug}" }, preview: ${
        preview ? 'true' : 'false'
        }, limit: 1) {
            items {
            ${PAGE}
            }
        }
        }`,
        preview
    )

    return {
        page: extractPage(entry),
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
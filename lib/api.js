const HOMEPAGE = `
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
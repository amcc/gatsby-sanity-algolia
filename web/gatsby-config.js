// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
})

const clientConfig = require('./client-config')

const isProd = process.env.NODE_ENV === 'production'

// gatsby-config.js
const myQuery = `{
  allSanityPost {
    edges {
      node {
        title
        id
        slug {
          current
        }
      }
    }
  }
}`

const queries = [
  {
    query: myQuery,
    transformer: ({data}) => data.allSanityPost.edges.map(({node}) => node), // optional
    indexName: 'posts', // overrides main index name, optional
    settings: {
      // optional, any index settings
    },
    matchFields: ['slug', 'modified'] // Array<String> overrides main match fields, optional
  }
]

module.exports = {
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        ...clientConfig.sanity,
        token: process.env.SANITY_READ_TOKEN,
        watchMode: !isProd,
        overlayDrafts: !isProd
      }
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.ALGOLIA_APP_ID,
        // Careful, no not prefix this with GATSBY_, since that way users can change
        // the data in the index.
        apiKey: process.env.ALGOLIA_API_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME, // for all queries
        queries,
        chunkSize: 10000, // default: 1000
        settings: {
          // optional, any index settings
        },
        enablePartialUpdates: true, // default: false
        matchFields: ['slug', 'modified'] // Array<String> default: ['modified']
      }
    }
  ]
}

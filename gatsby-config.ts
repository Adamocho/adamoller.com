import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Adam Oller - programmer and a jack of all trades`,
    siteUrl: `https://www.adamoller.com`
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
        // make your own SVG icon 512x512px 
      }
    },
    {
      resolve: 'gatsby-omni-font-loader',
      options: {
        enableListener: true,
        preconnect: ['https://fonts.googleapis.com', 'https://fonts.gstatic.com'],
        web: [
          {
            name: 'Open Sans',
            file: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap'
          },
          {
            name: 'Sacramento',
            file: 'https://fonts.googleapis.com/css2?family=Sacramento&display=swap'
          }
      ]}
    }
  ]
};

export default config;

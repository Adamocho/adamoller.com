import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Adam Oller's website`,
    siteUrl: `https://www.adamoller.com`
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.svg"
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
            name: 'Fira Code',
            file: 'https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&display=swap'
          }
      ]}
    }
  ]
};

export default config;

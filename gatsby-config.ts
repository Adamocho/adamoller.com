import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Adam Oller - programmer and a jack of all trades`,
    siteUrl: `https://www.adamoller.com`
  },
  plugins: [{
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
      // make your own SVG icon 512x512px 
    }
  }]
};

export default config;

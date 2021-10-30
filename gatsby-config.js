require('dotenv').config({ path: `.env` });

module.exports = {
  siteMetadata: {
    author: `Jack Lyons`,
    title: `Wildblend`,
    description: `Zoe Lyons, from Australia. Loves Unicorn Food and Lifting, A Challenge, Crossfit, Happiness and Health, All Things Wild & Natural. `,
    siteUrl: `https://wildblend.co`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/`,
        name: `images`,
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Wildblend`,
        short_name: `Wildblend`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/images/icon/logo-gold.png`,
        theme_color_in_head: false,
      },
    },
    `gatsby-plugin-offline`,
  ],
};

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Ben Stickley",
    description: "Ben Stickley's Personal Website",
    url: "https://benstickley.com",
    twitterUsername: "@ben_stickley",
  },
  plugins: [
    "gatsby-plugin-material-ui",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/Layout.tsx"),
        },
      },
    },
  ],
};

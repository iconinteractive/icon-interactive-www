// This is where project configuration and installed plugin options are located.
// Learn more: https://gridsome.org/docs/config

module.exports = {
  siteName: "ICON Interactive",
  siteUrl: `https://www.iconinteractive.com`,
  host: "0.0.0.0",
  titleTemplate: "%s",
  siteDescription:
    "ICON Interactive is a full-service digital agency that represents the merger of extraordinary design and powerful technology.",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "projects/**/*.md",
        typeName: "ProjectPost",
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"]
        }
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "events/**/*.md",
        typeName: "EventPost",
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"]
        }
      }
    }
  ],
  transformers: {
    remark: {
      plugins: ["@gridsome/remark-prismjs"]
    }
  }
};

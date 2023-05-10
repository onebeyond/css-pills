import { defineConfig } from "vitepress";

export default defineConfig({
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        href: "/favicon.png",
      },
    ],
    [
      "meta",
      {
        property: "og:title",
        content: "CSS Pills",
      },
    ],
    [
      "meta",
      {
        property: "og:description",
        content: "Quick and concise CSS tips in 5 minutes or less",
      },
    ],
    [
      "meta",
      {
        property: "og:image",
        content: "https://ob-css-pills-og.vercel.app/api/og",
      },
    ],
    [
      "meta",
      {
        property: "og:url",
        content: "https://onebeyond.github.io/css-pills/",
      },
    ],
    [
      "meta",
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],
    [
      "meta",
      {
        name: "twitter:image",
        content: "https://ob-css-pills-og.vercel.app/api/og",
      },
    ],
    [
      "script",
      {
        src: "https://cdn.usefathom.com/script.js",
        defer: true,
        "data-site": "SNEUCKSC",
        "data-honor-dnt": true,
      },
    ],
  ],
  base: "/css-pills/",
  title: "CSS Pills",
  description: "Quick and concise CSS tips in 5 minutes or less",
  lastUpdated: true,
  // markdown: { lineNumbers: true, },
  themeConfig: {
    logo: {
      src: "/favicon.png",
      alt: "CSS Pills logo",
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "Pills", link: "/pills/" },
      { text: "Team", link: "/team" },
    ],
    sidebar: [
      {
        text: "Pills",
        items: [
          {
            text: "What is HSL color in CSS",
            link: "/pills/what-is-hsl-color-in-css",
          },
          {
            text: "Understanding Logical Properties in CSS",
            link: "/pills/understanding-logical-properties-in-css",
          },
          {
            text: "Everything is a box in CSS",
            link: "/pills/everything-is-a-box-in-css",
          },
          {
            text: "z-index in CSS: tips, tricks and use cases",
            link: "/pills/z-index-in-css-tips-tricks-and-use-cases",
          },
        ],
      },
    ],
    editLink: {
      pattern: "https://github.com/onebeyond/css-pills/edit/main/docs/:path",
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2023 - One Beyond",
    },
    algolia: {
      appId: "WD40FDK2NM",
      apiKey: "6dcec7234bbdb0a5f6f45c4210a03809",
      indexName: "css-pills",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/onebeyond/css-pills" },
    ],
  },
});

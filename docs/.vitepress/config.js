// import fs from 'fs';
// import path from 'path';
import { defineConfig } from 'vitepress';

// import fm from 'front-matter';
// import algoliasearch from 'algoliasearch';

export default defineConfig({
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon.png',
      },
    ],
    // open graph
    [
      'meta',
      {
        property: 'og:title',
        content: 'CSS Pills',
      },
    ],
    [
      'meta',
      {
        property: 'og:description',
        content: 'Quick and concise CSS tips in 5 minutes or less',
      },
    ],
    [
      'meta',
      {
        property: 'og:image',
        content: 'https://ob-css-pills-og.vercel.app/api/og',
      },
    ],
    [
      'meta',
      {
        property: 'og:url',
        content: 'https://onebeyond.github.io/css-pills/',
      },
    ],
    [
      'meta',
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    ],
    [
      'meta',
      {
        name: 'twitter:image',
        content: 'https://ob-css-pills-og.vercel.app/api/og',
      },
    ],
    [
      'script',
      {
        src: 'https://cdn.usefathom.com/script.js',
        defer: true,
        'data-site': 'SNEUCKSC',
        'data-included-domains': 'https://onebeyond.github.io/css-pills/',
        'data-honor-dnt': true,
      },
    ],
  ],
  base: '/css-pills/',
  title: 'CSS Pills',
  description: 'Quick and concise CSS tips in 5 minutes or less',
  lastUpdated: true,
  // markdown: { lineNumbers: true, },
  themeConfig: {
    logo: {
      src: '/favicon.png',
      alt: 'CSS Pills logo',
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Pills', link: '/pills/' },
      { text: 'Team', link: '/team' },
    ],
    sidebar: [
      {
        text: 'Pills',
        items: [
          {
            text: 'What is HSL color in CSS',
            link: '/pills/what-is-hsl-color-in-css',
          },
        ],
      },
    ],
    editLink: {
      pattern: 'https://github.com/onebeyond/css-pills/edit/main/docs/:path',
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023 - One Beyond',
    },
    // algolia: {
    //   appId: '5D6FRGC6T9',
    //   apiKey: 'e04451b589c4840900545435e2742361',
    //   indexName: 'csspills',
    // },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/onebeyond/css-pills' },
    ],
  },
  // async buildEnd(siteConfig) {
  //   try {
  //     const { pages } = siteConfig;
  //     const pillsPages = pages.filter((page) => page.includes('pills/'));

  //     const pagesData = pillsPages.map((page) => {
  //       const pageContent = fs.readFileSync(
  //         path.join(__dirname, `../${page}`),
  //         'utf-8'
  //       );

  //       const { attributes } = fm(pageContent);
  //       return attributes;
  //     });

  //     const client = algoliasearch(
  //       siteConfig.site.themeConfig.algolia.appId,
  //       'xxx'
  //     );
  //     const index = client.initIndex(
  //       siteConfig.site.themeConfig.algolia.indexName
  //     );
  //     await index.replaceAllObjects(pagesData, {
  //       autoGenerateObjectIDIfNotExist: true,
  //     });

  //     const aws = await index.search('AWS');
  //     console.log('aws: ', aws);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // },
});

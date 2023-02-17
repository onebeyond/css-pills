import fs from 'fs';
import path from 'path';
import fm from 'front-matter';
import { defineConfig } from 'vitepress';

// import algoliasearch
import algoliasearch from 'algoliasearch';

export default defineConfig({
  base: '/css-pills/',
  title: 'CSS Pills',
  description: 'A collection of CSS pills',
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Pills', link: '/pills/' },
      { text: 'Team', link: '/team' },
      { text: 'GitHub', link: 'https://github.com/onebeyond/css-pills' },
    ],
    sidebar: [
      {
        text: 'Pills',
        items: [
          { text: 'Pill 1', link: '/pills/pill1' },
          { text: 'Pill 2', link: '/pills/pill2' },
          { text: 'Pill 3', link: '/pills/pill3' },
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
    algolia: {
      appId: '5D6FRGC6T9',
      apiKey: 'e04451b589c4840900545435e2742361',
      indexName: 'ob_css_pills',
    },
  },
  async buildEnd(siteConfig) {
    try {
      const { pages } = siteConfig;
      const pillsPages = pages.filter((page) => page.includes('pills/'));

      // get the front matter of each page
      const allAttributes = pillsPages.map((page) => {
        const pageContent = fs.readFileSync(
          path.join(__dirname, `../${page}`),
          'utf-8'
        );

        const { attributes } = fm(pageContent);
        return attributes;
      });
      console.log(
        '🚀 ~ file: config.js:58 ~ allAttributes ~ allAttributes',
        allAttributes
      );

      const client = algoliasearch(
        siteConfig.site.themeConfig.algolia.appId,
        'dc6af39c34ffaf5613966ac887352071'
      );

      const index = client.initIndex(
        siteConfig.site.themeConfig.algolia.indexName
      );

      const result = await index.saveObjects(allAttributes, {
        autoGenerateObjectIDIfNotExist: true,
      });
      console.log('result,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,');
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  },
});

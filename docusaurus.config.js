// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'NorairLabs - Documentation',
  tagline: 'Begin exploring our Documentation !',
  favicon: 'img/favicon.ico',

  // URL & Base Path
  url: 'https://docs.norairlabs.com',
  baseUrl: '/',
  trailingSlash: false,

  // Warnings
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  // Internationalization
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Plugins
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/norairlabs/docs-norairlabs-com/blob/master/'
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  // Theme Config
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/social-card.jpg',
      navbar: {
        title: '',
        logo: {
          alt: 'NorairLabs Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'userManualSidebar',
            position: 'left',
            label: 'User Manual',
          },
          {
            type: 'docSidebar',
            sidebarId: 'sdkSidebar',
            position: 'left',
            label: 'SDK',
          },
          {
            href: 'https://github.com/norairlabs/docs-norairlabs-com',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Gaman Portugal, Lda.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
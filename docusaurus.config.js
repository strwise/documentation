// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'StreamWise - VPaaS Resell Platform',
  tagline: 'Welcome to StreamWise vPaaS, a Video Streaming Resell Platform. StreamWise is a powerful and customizable platform that enables businesses and individuals to offer high-quality video streaming services to their customers.',
  favicon: 'img/favicon.png',

  // disable indexing of the site
  noIndex: false,

  // Set the production url of your site here
  url: process.env.DOMAIN || 'https://docs.streamwise.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'strwise', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      // Replace with your project's social card
      image: 'img/streamwise-vpaas.jpg',
      navbar: {
        title: 'Home',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          // {
          //   href: 'https://api-reference.streamwise.online/private/',
          //   position: 'right',
          //   label: 'API Reference (private)',
          // },
          // {
          //   href: 'https://api-reference.streamwise.online/public/',
          //   position: 'right',
          //   label: 'API Reference (public)',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Overview',
                to: '/docs/overview',
              },
            ],
          },
          {
            title: 'API Reference',
            items: [
              {
                label: 'API Reference (private)',
                href: 'https://api-reference.streamwise.app/private',
              },
              {
                label: 'API Reference (public)',
                href: 'https://api-reference.streamwise.app/public',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Mimir Tech. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['json', 'bash', 'diff', 'php', 'http'],
      },
      // add meta tag with Page Author
      metadata: [{ name: 'author', content: 'Mimir Tech' }],
    }),
};

module.exports = config;

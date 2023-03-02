// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Jellyfish docs',
  tagline: 'Jellyfish are cool',
  favicon: 'img/membrane-signet.svg',

  // Set the production url of your site here
  url: 'https://jellyfish-docs.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'jellyfish-dev', // Usually your GitHub org/user name.
  projectName: 'jellyfish-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/jellyfish-dev/jellyfish-docs',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/membrane-signet.svg',
      navbar: {
        title: 'Jellyfish docs',
        logo: {
          alt: 'Jellyfish Logo',
          src: 'img/membrane-vertical-contour.svg',
        },
        items: [
          // Hide doc from navbar for now - introduction will be the landing page
          // {
          //   type: 'doc',
          //   docId: 'signaling_architecture',
          //   position: 'left',
          //   label: 'Docs',
          // },
          {
            href: 'https://github.com/jellyfish-dev/jellyfish',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Introduction',
                to: '/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.com/invite/nwnfVSY',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/elixirmembrane',
              },
              {
                label: 'Elixir Forum',
                href: 'https://elixirforum.com/c/elixir-framework-forums/membrane-forum/104',
              },
            ],
          },
          {
            title: 'More',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/jellyfish-dev/jellyfish',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Software Mansion S.A.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  plugins: [require.resolve('docusaurus-lunr-search')],
};

module.exports = config;

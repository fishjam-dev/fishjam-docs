// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Jellyfish docs',
  tagline: 'Jellyfish are cool',
  favicon: 'img/membrane_logo.svg',

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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/jellyfish-dev/jellyfish-docs',
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
      image: 'img/membrane_logo.svg',
      navbar: {
        title: 'Jellyfish',
        logo: {
          alt: 'Jellyfish Logo',
          src: 'img/membrane_logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'signaling_architecture',
            position: 'left',
            label: 'Docs',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
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
                label: 'Tutorial',
                to: '/docs/signaling_architecture',
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

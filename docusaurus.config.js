// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Fishjam',
  tagline: 'FishJosh is cool',
  favicon: 'img/logo/favicon.svg',

  // Set the production url of your site here
  url: 'https://fishjam-dev.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/fishjam-docs/',

  // GitHub pages deployment config.
  organizationName: 'fishjam-dev',
  projectName: 'fishjam-docs',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

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
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/fishjam-dev/fishjam-docs',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-9XVKCZJZRH',
          anonymizeIP: true,
        },
      },
    ],
    [
      'redocusaurus',
      {
        // Plugin Options for loading OpenAPI files
        specs: [
          {
            id: 'fishjam-rest-api',
            spec: 'https://raw.githubusercontent.com/fishjam-dev/fishjam/main/openapi.yaml',
            route: '/examples/using-single-yaml/',
          },
          {
            id: 'fishjam-rest-apix-0_2_1',
            spec: 'https://raw.githubusercontent.com/fishjam-dev/fishjam/v0.2.1/openapi.yaml',
            route: '/examples/using-single-yaml-0_2_1/',
          },
          {
            id: 'fishjam-rest-apix-0_3_0',
            spec: 'https://raw.githubusercontent.com/fishjam-dev/fishjam/v0.3.0/openapi.yaml',
            route: '/examples/using-single-yaml-0_3_0/',
          },
          {
            id: 'fishjam-rest-apix-0_4_2',
            spec: 'https://raw.githubusercontent.com/fishjam-dev/fishjam/v0.4.2/openapi.yaml',
            route: '/examples/using-single-yaml-0_4_2/',
          },
          {
            id: 'fishjam-rest-apix-0_5_0',
            spec: 'https://raw.githubusercontent.com/fishjam-dev/fishjam/v0.5.0/openapi.yaml',
            route: '/examples/using-single-yaml-0_5_0/',
          }
        ],
        // Theme Options for modifying how redoc renders them
        theme: {
          // Change with your site colors
          primaryColor: '#3F57A6',
        },
      },
    ],
  ],

  themes: [
    'docusaurus-theme-github-codeblock'
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/logo/favicon.svg',
      navbar: {
        title: 'Fishjam Docs',
        logo: {
          alt: 'Fishjam Logo',
          src: 'img/logo/sygnet-black.svg',
          srcDark: 'img/logo/sygnet-light.svg',
        },
        items: [
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownActiveClassDisabled: true,
          },
          {
            href: 'https://github.com/fishjam-dev/fishjam',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://fishjam-dev.github.io/fishjam-dashboard/',
            label: 'Fishjam Dashboard',
            position: 'left',
          },
          {
            href: 'https://jellyroom.membrane.stream/',
            label: 'Fishjam Room',
            position: 'left',
          }
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
                href: 'https://github.com/fishjam-dev/fishjam',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Software Mansion S.A.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['elixir']
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'MKQW7UWJGK',

        // Public API key: it is safe to commit it
        apiKey: '4b226ecf0912d4f136ebb9ac4f01b4d5',

        indexName: 'fishjam',

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
      },
      // Github codeblock theme configuration
      codeblock: {
        showGithubLink: true,
        githubLinkLabel: 'View on GitHub',
        showRunmeLink: false
      }
    }),
};

module.exports = config;

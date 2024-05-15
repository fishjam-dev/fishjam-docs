// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Jellyfish',
  tagline: 'Jellyfish are cool',
  favicon: 'img/membrane-signet-light.svg',

  // Set the production url of your site here
  url: 'https://jellyfish-dev.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/jellyfish-docs/',

  // GitHub pages deployment config.
  organizationName: 'jellyfish-dev',
  projectName: 'jellyfish-docs',
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
            'https://github.com/jellyfish-dev/jellyfish-docs',
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
            id: 'jellyfish-rest-api',
            spec: 'https://raw.githubusercontent.com/jellyfish-dev/jellyfish/main/openapi.yaml',
            route: '/examples/using-single-yaml/',
          },
          {
            id: 'jellyfish-rest-apix-0_2_1',
            spec: 'https://raw.githubusercontent.com/jellyfish-dev/jellyfish/v0.2.1/openapi.yaml',
            route: '/examples/using-single-yaml-0_2_1/',
          },
          {
            id: 'jellyfish-rest-apix-0_3_0',
            spec: 'https://raw.githubusercontent.com/jellyfish-dev/jellyfish/v0.3.0/openapi.yaml',
            route: '/examples/using-single-yaml-0_3_0/',
          },
          {
            id: 'jellyfish-rest-apix-0_4_2',
            spec: 'https://raw.githubusercontent.com/jellyfish-dev/jellyfish/v0.4.2/openapi.yaml',
            route: '/examples/using-single-yaml-0_4_2/',
          },
          {
            id: 'jellyfish-rest-apix-0_5_0',
            spec: 'https://raw.githubusercontent.com/jellyfish-dev/jellyfish/v0.5.0/openapi.yaml',
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
      image: 'img/membrane-signet-light.svg',
      navbar: {
        title: 'Jellydocs',
        logo: {
          alt: 'Jellyfish Logo',
          src: 'img/membrane-signet-light.svg',
        },
        items: [
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownActiveClassDisabled: true,
          },
          {
            href: 'https://github.com/jellyfish-dev/jellyfish',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://jellyfish-dev.github.io/jellyfish-dashboard/',
            label: 'Jellydashboard',
            position: 'left',
          },
          {
            href: 'https://jellyroom.membrane.stream/',
            label: 'Jellyroom',
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
        additionalLanguages: ['elixir']
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'MKQW7UWJGK',

        // Public API key: it is safe to commit it
        apiKey: '4b226ecf0912d4f136ebb9ac4f01b4d5',

        indexName: 'jellyfish',

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

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  mainSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      collapsed: false,
      items: [
        'introduction/what_is_jellyfish',
        'introduction/basic_concepts',
        'introduction/example_scenarios',
      ]
    },
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: true,
      items: [
        'getting_started/installation',
        'getting_started/architecture',
        'getting_started/authentication',
        'getting_started/sdks',
        {
          type: 'category',
          label: 'Peers',
          collapsed: true,
          items: [
            'getting_started/peers/webrtc'
          ]
        },
        {
          type: 'category',
          label: 'Components',
          collapsed: true,
          items: [
            'getting_started/components/hls',
            'getting_started/components/rtsp'
          ]
        }
      ]
    },
    'cluster',
    'examples',
    {
      type: 'category',
      label: 'Tutorials',
      collapsed: true,
      items: [
          "tutorials/dashboard",
        {
          type: 'category',
          label: 'Minimal Working Examples',
          collapsible: false,
          collapsed: false,
          items: [
            'tutorials/minimal-working-example-react',
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Deploying',
      collapsed: true,
      items: [
        'deploying/vps',
        'deploying/fly_io'
      ]
    },
    'metrics',
    'design_docs',
    {
      type: 'category',
      label: 'API Reference',
      link: {
        type: 'doc',
        id: 'api_reference',
      },
      items: [
        'api_reference/rest_api'
      ]
    }
  ],
};

module.exports = sidebars;

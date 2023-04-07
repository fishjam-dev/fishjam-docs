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
      collapsed: false,
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
    'design_docs',
    'rest_api_reference',
  ],
};

module.exports = sidebars;

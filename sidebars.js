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
      type: "category",
      label: "Introduction",
      collapsed: false,
      items: [
        "introduction/what_is_jellyfish",
        "introduction/basic_concepts",
        "introduction/example_scenarios",
      ],
    },
    {
      type: "category",
      label: "Getting Started",
      collapsed: true,
      items: [
        "getting_started/installation",
        "getting_started/architecture",
        "getting_started/authentication",
        "getting_started/notifications",
        "getting_started/metrics",
        "getting_started/sdks",
        {
          type: "category",
          label: "Peers",
          collapsed: true,
          items: ["getting_started/peers/webrtc"],
        },
        {
          type: "category",
          label: "Components",
          collapsed: true,
          items: [
            "getting_started/components/hls",
            "getting_started/components/rtsp",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Tutorials",
      collapsed: true,
      items: [
        {
          type: "category",
          label: "Minimal Working Examples",
          collapsible: false,
          collapsed: false,
          items: [
            "tutorials/dashboard",
            "tutorials/simple-react-app",
            "tutorials/react-native",
          ],
        },
      ],
    },
    "cluster",
    {
      type: "category",
      label: "Deploying",
      collapsed: true,
      items: ["deploying/vps", "deploying/fly_io"],
    },
    {
      type: "category",
      label: "Benchmarks",
      collapsed: true,
      link: {
        type: "doc",
        id: "benchmarks",
      },
      items: [
        "benchmarks/hls",
        "benchmarks/webrtc"
      ]
    },
    {
      type: "category",
      label: "For Developers",
      items: [
        "for_developers/design_docs",
        "for_developers/metrics_design",
        {
          type: "category",
          label: "API Reference",
          collapsed: true,
          link: {
            type: "doc",
            id: "for_developers/api_reference",
          },
          items: ["for_developers/api_reference/rest_api"],
        },
      ],
    },
  ],
};

module.exports = sidebars;

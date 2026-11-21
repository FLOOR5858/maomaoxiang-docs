/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'intro',
    {
      type: 'category',
      label: '产品',
      collapsed: false,
      items: ['product/solar-mercury-soc', 'product/luna-camera', 'product/combo-kit'],
    },
    {
      type: 'category',
      label: '硬件与接口',
      items: ['hardware/interfaces'],
    },
    {
      type: 'category',
      label: '软件与开发',
      items: ['software/sdk'],
    },
    'downloads',
    'faq',
    'support',
  ],
};

module.exports = sidebars;

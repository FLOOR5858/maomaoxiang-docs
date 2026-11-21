/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'intro',
    {
      type: 'category',
      label: '产品说明',
      collapsed: false,
      items: ['product/rv1106g3-sc233'],
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

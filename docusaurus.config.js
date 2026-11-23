const { themes } = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '毛毛象实验室 · 产品文档',
  tagline: 'SOLAR 行星系列视觉主控 + 卫星系列摄像头模组',
  favicon: 'img/favicon.svg',

  url: 'https://docs.maomaoxiang.com',
  baseUrl: '/',
  organizationName: 'FLOOR5858',
  projectName: 'maomaoxiang-docs',
  onBrokenLinks: 'warn',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/FLOOR5858/maomaoxiang-docs/edit/main/',
          showLastUpdateTime: true,
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
      navbar: {
        title: '毛毛象实验室',
        logo: {
          alt: '毛毛象实验室',
          src: 'img/logo.svg',
          srcDark: 'img/logo-dark.svg',
        },
        items: [
          { to: '/', label: '产品', position: 'left' },
          { to: '/downloads', label: '资料', position: 'left' },
          { to: '/buy', label: '购买', position: 'left' },
          {
            type: 'dropdown',
            label: 'FAQ',
            position: 'left',
            items: [
              { to: '/faq', label: '常见问题' },
              { to: '/support', label: '售后政策' },
            ],
          },
          { href: 'https://blog.maomaoxiang.com', label: '技术博客', position: 'right' },
          { href: 'https://github.com/FLOOR5858/maomaoxiang-docs', label: 'GitHub', position: 'right' },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '产品',
            items: [
              { label: '产品门面', to: '/' },
              { label: '资料下载', to: '/downloads' },
              { label: '购买', to: '/buy' },
              { label: '常见问题', to: '/faq' },
            ],
          },
          {
            title: '社区',
            items: [
              { label: '技术博客', href: 'https://blog.maomaoxiang.com' },
              { label: 'GitHub', href: 'https://github.com/FLOOR5858' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 毛毛象实验室`,
      },
      prism: {
        theme: themes.github,
        darkTheme: themes.dracula,
        additionalLanguages: ['bash', 'c', 'cpp', 'python', 'ini'],
      },
    }),
};

module.exports = config;

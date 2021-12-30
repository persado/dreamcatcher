/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Dreamcatcher',
  tagline: '',
  url: 'https://persado.github.io',
  baseUrl: '/dreamcatcher/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  organizationName: 'persado', // Usually your GitHub org/user name.
  projectName: 'dreamcatcher', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Dreamcatcher',
      logo: {
        alt: 'Dreamcatcher',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'features',
          position: 'left',
          label: 'Features',
        },
        {
          type: 'doc',
          docId: 'quick_start',
          position: 'left',
          label: 'Quick Start',
        },
        {
          type: 'doc',
          docId: 'api/export',
          position: 'left',
          label: 'API',
        },
        {
          href: 'https://github.com/persado/dreamcatcher',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © 2022 Persado, Inc. Docs built with <a href="https://docusaurus.io/" target="_blank">Docusaurus</a>. Icon by <a href="https://www.freepik.com" title="Freepik" target="_blank">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon" target="_blank">FlatIcon.com</a>.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/persado/dreamcatcher/edit/master/docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

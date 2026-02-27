import { defineConfig } from 'vitepress'

export default defineConfig({
  srcDir: './docs',
  title: "OpenClaw Wiki",
  description: "A wiki for OpenClaw technical points.",

  themeConfig: {
    logo: './logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/introduction' },
      { text: 'API', link: '/api/reference' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Introduction', link: '/guide/introduction' },
            { text: 'Installation', link: '/guide/installation' },
          ]
        }
      ],
      '/api/': [
        {
          text: 'API',
          items: [
            { text: 'Reference', link: '/api/reference' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/279458179/openclaw_wiki' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present'
    },

    search: { 
      provider: 'local'
    }
  },

  head: [
    ['link', { rel: 'icon', href: '/logo.svg' }]
  ]
})

import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "OpenClaw Wiki",
  description: "A wiki for OpenClaw technical points.",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Get Started', link: '/getting-started' }
    ],
    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Getting Started', link: '/getting-started' },
        ]
      }
    ],
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
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ]
})

import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>OpenClaw Wiki</span>,
  project: {
    link: 'https://github.com/279458179/openclaw_wiki',
  },
  docsRepositoryBase: 'https://github.com/279458179/openclaw_wiki/tree/main',
  footer: {
    text: 'OpenClaw Wiki',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – OpenClaw Wiki'
    }
  }
}

export default config

import type { Config } from '@stencil/core'

export const config: Config = {
  namespace: 'shuffle-text',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'dist'
    },
    {
      type: 'www'
    },
    {
      type: 'docs-readme'
    }
  ]
}

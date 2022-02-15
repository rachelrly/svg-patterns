import type { PatternType } from '../types'

export const PATTERNS: readonly PatternType[] = [
  {
    name: 'tile',
    text: 'dark'
  },
  {
    name: 'stitch',
    text: 'dark'
  },
  {
    name: 'dots',
    text: 'dark'
  },

  {
    name: 'ring',
    text: 'dark'
  },
  {
    name: 'calico',
    text: 'dark'
  },
  {
    name: 'velvet',
    text: 'light'
  },

  {
    name: 'blue',
    text: 'light'
  },
  {
    name: 'example',
    text: 'dark'
  }
] as const

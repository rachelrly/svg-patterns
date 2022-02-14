import type { PatternType } from '../types'

export const PATTERNS: readonly PatternType[] = [
  {
    name: 'current',
    text: 'light'
  },
  {
    name: 'tile',
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
    name: 'stitch',
    text: 'dark'
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

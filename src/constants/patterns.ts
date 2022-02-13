import type { PatternType } from '../types'

export const PATTERNS: readonly PatternType[] = [
  {
    name: 'current',
    text: 'dark'
  },
  {
    name: 'ring',
    text: 'dark'
  },
  {
    name: 'velvet',
    text: 'light'
  },
  {
    name: 'stitch',
    text: 'light'
  },
  {
    name: 'example',
    text: 'light'
  }
] as const

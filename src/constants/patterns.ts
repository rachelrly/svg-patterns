import type { PatternType } from '../types'

export const PATTERNS: readonly PatternType[] = [
  {
    name: 'ring',
    title: 'Blue Rings',
    url: '../svg/ring.svg'
  },
  {
    name: 'next',
    title: 'Working on this one now',
    url: '../svg/ring.svg'
  }
] as const

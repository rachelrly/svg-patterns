<script lang="ts">
  import type { PatternType } from '../types'
  import { PATTERNS } from '../constants'
  import Samples from '../components/Samples.svelte'

  export let current: PatternType = PATTERNS[0]
  const bg = `bg-${current.name}`
  function selectPattern(pattern: PatternType) {
    console.log('THIS IS OLD CURRENT', current)
    current = pattern
  }
</script>

<svelte:head>
  <title>Rachel Reilly's SVG Patterns</title>
</svelte:head>

<main
  class="flex flex-col items-center min-h-screen w-screen h-screen bg-{current.name} font-extralight"
>
  <h1
    class="flex justify-center text-3xl py-4 px-2 w-full {current?.text ===
    'light'
      ? 'text-white'
      : 'text-black'}"
  >
    Rly SVG Patterns
  </h1>
  <Samples {selectPattern} />
</main>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>

<script lang="ts">
  import type { PatternType } from '../types'
  export let pattern: PatternType
  export let selectPattern: (pattern: PatternType) => void

  function handleSelectPattern() {
    selectPattern(pattern)
  }
</script>

<li
  class="h-36 w-36 border border-black p-3 m-2 bg-{pattern.name} bg-opacity-100 flex items-center text-center justify-center {pattern?.text ===
  'light'
    ? 'text-white'
    : 'text-black'}"
  on:click={handleSelectPattern}
>
  <h2>{pattern?.title ?? pattern.name}</h2>
</li>

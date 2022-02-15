<script lang="ts">
  import type { PatternType } from '../types'
  import { PATTERNS } from '../constants'
  import Sample from './Sample.svelte'
  import Preload from './Preload.svelte'
  export let selectPattern: (pattern: PatternType) => void
</script>

<ul
  class="w-full h-full p-2 flex flex-row flex-wrap flex justify-center overflow-hidden max-w-[1000px] lg:px-4"
>
  {#each PATTERNS as pattern}
    <Sample {pattern} {selectPattern} />
  {/each}
</ul>
<Preload />

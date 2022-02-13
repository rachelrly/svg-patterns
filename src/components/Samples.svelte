<script lang="ts">
  import type { PatternType } from '../types'
  import { PATTERNS } from '../constants'
  import Sample from './Sample.svelte'
  import Preload from './Preload.svelte'
  export let selectPattern: (pattern: PatternType) => void
</script>

<ul class="w-full h-full flex flex-row flex justify-center items-center">
  {#each PATTERNS as pattern}
    <Sample {pattern} {selectPattern} />
  {/each}
</ul>
<Preload />

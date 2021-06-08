<script lang="ts">
  import Icon from "mdi-svelte";
  import { mdiGithub } from "@mdi/js";
</script>

<nav class="flex items-center justify-between flex-wrap bg-blue-500 px-6 py-4">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
    <a href="/" class="font-semibold text-xl tracking-tight"
      >디시콘 뷰어/다운로더</a
    >
  </div>
  <div>
    <a
      href="https://github.com/gangjun06/dc-cone-helper"
      class="inline-block px-4 py-2 leading-none rounded text-white border-white hover:border-transparent mt-4 lg:mt-0"
      ><Icon path={mdiGithub} size={1.2} /></a
    >
  </div>
</nav>

<script lang="ts">
  import { Link } from "svelte-routing";
  import Icon from "mdi-svelte";
  import { mdiGithub } from "@mdi/js";
</script>

<nav
  class="flex items-center justify-between flex-wrap bg-blue-500 px-6 py-4 shadow"
>
  <div class="flex items-center flex-shrink-0 text-white mr-6">
    <Link to="/" class="font-semibold text-xl tracking-tight"
      >디시콘 뷰어/다운로더</Link
    >
  </div>
  <div class="">
    <div>
      <a
        href="https://github.com/gangjun06/dc-cone-helper"
        class="inline-block px-4 py-full leading-none rounded text-white border-white hover:border-transparent lg:mt-0"
        ><Icon path={mdiGithub} size={1.2} /></a
      >
    </div>
  </div>
</nav>

<script lang="ts">
  import type { ConInfo } from "../models";
  import ConInfoItem from "../components/ConInfoItem.svelte";
  import * as utils from "../utils";
  import Search from "../components/Search.svelte";
  const cons: ConInfo[] = utils.GetFavoriteCon();
</script>

<div>
  <Search />
  <div class="text-xl mt-12 mb-4 text-gray-700">즐겨찾기 등록한 콘</div>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-flow-row gap-4"
  >
    {#if cons.length > 0}
      {#each cons as data}
        <ConInfoItem {data} />
      {/each}
    {:else}
      <div class="text-gray-500 px-4 py-2 shadow">즐겨찾기에 등록된 콘이 없습니다</div>
    {/if}
  </div>
</div>

<style>
</style>

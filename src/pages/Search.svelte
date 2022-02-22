<script lang="ts">
  import SearchBar from "../components/Search.svelte";
  import * as utils from "../utils";
  import queryString from "query-string";
  import type { ConInfo } from "../models";
  import ConInfoItem from "../components/ConInfoItem.svelte";

  $: searchQuery = queryString.parse(window.location.search).q.toString();
  let promise: null | Promise<ConInfo[]> = null;
  $: promise = utils.Search(searchQuery);

  const onSubmit = (str: string) => {
    searchQuery = str;
    promise = utils.Search(str);
  };
</script>

<div>
  <SearchBar initialText={searchQuery} {onSubmit} />
  {#await promise}
    <div>로딩중...</div>
  {:then value}
    <div class="mt-12">
      <div class="text-gray-600 mb-4">
        <p class="font-bold inline-block">{searchQuery}</p>
        에 관한 검색결과가 {value.length}개 있습니다. (최대 10개)
      </div>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-flow-row gap-4"
      >
        {#each value as data}
          <ConInfoItem {data} />
        {/each}
      </div>
    </div>
  {:catch error}
    <div>요청중 에러가 발생하였습니다. {error}</div>
  {/await}
</div>

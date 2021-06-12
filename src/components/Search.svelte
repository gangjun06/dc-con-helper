<script lang="ts">
  export const initialText: string = "";
  let searchText: string = initialText;
  import { navigate } from "svelte-routing";
  import Icon from "mdi-svelte";
  import { mdiMagnify } from "@mdi/js";
  let link = "#";
  $: link = searchText.trim() === "" ? "#" : `/search?q=${searchText.trim()}`;

  const onKeyDown = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      onSubmit(searchText);
      navigate(link);
    }
  };

  export let onSubmit: (str: string) => void = (str) => {};
</script>

<div class="mb-4 mt-8 w-full max-w-md mx-auto">
  <div
    class="flex shadow-lg flex-row rounded items-center px-3 py-3 "
  >
    <Icon path={mdiMagnify} />
    <input
      placeholder="검색어를 입력하여 주세요"
      bind:value={searchText}
      on:keydown={onKeyDown}
      class="ml-2 focus:outline-none flex-wrap"
    />
  </div>
</div>

<!-- 
<div class="flex justify-center mb-4 mt-8">
  <div class="inline-block">
    <div class="flex shadow-lg flex-wrap flex-row rounded-lg overflow-hidden">
      <input
        placeholder="검색어를 입력하여 주세요"
        bind:value={searchText}
        class="focus:outline-none px-4"
      />
      <Link
        to={link}
        class="text-white transition bg-blue-400 hover:bg-blue-500 w-12 h-12 flex justify-center items-center cursor-pointer"
        on:click={() => onSubmit(searchText)}
      >
        <Icon path={mdiMagnify} />
      </Link>
    </div>
  </div>
</div> -->

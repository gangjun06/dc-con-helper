<script lang="ts">
  import * as utils from "../utils";
  import type { ConItem } from "../models";
  export let data: ConItem;
  const copyCon = async () => {
    try {
      let blob = await utils.GetImageBlob(data.path, data.ext);
      const file = new File([blob], `디시콘-${data.title}.${data.ext}`, {
        type: blob.type,
      });

      //@ts-ignore
      if (navigator.canShare) {
        await navigator.share({
          files: [file],
        });
        return;
      }
    } catch (e) {
      console.log(e);
    }
  };
</script>

<button
  class="max-w-sm rounded overflow-hidden shadow px-6 py-4 flex flex-col md:flex-row cursor-pointer focus:ring-2 focus:border-blue-500 focus:outline-none"
  on:click={copyCon}
>
  <img
    id="view-{data.id}"
    src="//dcimg5.dcinside.com/dccon.php?no={data.path}"
    alt={data.title}
  />
  <div class="ml-0 md:ml-4 flex items-center w-full  justify-center">
    <div class="text-gray-700 text-center">{data.title}</div>
  </div>
</button>

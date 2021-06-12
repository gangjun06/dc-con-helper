<script lang="ts">
  import type { ConItem } from "../models";
  export let data: ConItem;
  import { Toast, GetImageBlob } from "../utils";
  const copyCon = async () => {
    console.log(`view-${data.id}`)
    try {
      const blob = await GetImageBlob(`view-${data.id}`);
      //@ts-ignore
      const clipboardItem = new ClipboardItem({ [blob.type]: blob });
      //@ts-ignore
      navigator.clipboard.write([clipboardItem]);
      Toast("success", "성공적으로 복사되었습니다.");
    } catch (e) {
      Toast("error", "처리중 에러가 발생하였습니다.");
    }
  };
</script>

<button
  class="max-w-sm rounded overflow-hidden shadow px-6 py-4 flex flex-col md:flex-row cursor-pointer focus:ring-2 focus:border-blue-500 focus:outline-none"
  on:click={copyCon}
>
  <img
    id="view-{data.id}"
    src="https://proxy-dc-img.gangjun.dev/dccon.php?no={data.path}"
    alt={data.title}
  />
  <div class="ml-0 md:ml-4 flex items-center w-full justify-center">
    <div class="text-gray-700 text-center">{data.title}</div>
  </div>
</button>

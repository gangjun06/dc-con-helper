<script lang="ts">
  import type { ConItem } from "../models";
  export let data: ConItem;
  import { Toast, GetImageBlob } from "../utils";
  const copyCon = async () => {
    try {
      const shareData = {
        title: `디시콘 - ${data.title}`,
        text: "",
        url: `http://dcimg5.dcinside.com/dccon.php?no=${data.path}`,
      };
      //@ts-ignore
      if (navigator.canShare) {
        await navigator.share(shareData);
        return;
      }
    } catch (e) {
      console.log(e)
    }
    try {
      const blob = await GetImageBlob(data.path, data.ext);

      console.log(blob.type)
      //@ts-ignore
      const clipboardItem = new ClipboardItem({ [blob.type]: blob });
      //@ts-ignore
      navigator.clipboard.write([clipboardItem]);

      if (data.ext === "gif") {
        Toast("success", "GIF이미지는 정상적으로 복사되지 않을 수 있습니다.");
      } else {
        Toast("success", "성공적으로 복사되었습니다.");
      }
    } catch (e) {
      Toast("error", "처리중 에러가 발생하였습니다.");
      console.error(e);
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

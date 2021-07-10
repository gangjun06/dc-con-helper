<script lang="ts">
  import * as utils from "../utils";
  import type { DetailResult, ConItem } from "../models";
  import queryString from "query-string";
  import JSZip from "jszip";
  import { saveAs } from "file-saver";
  import DefaultButton from "../components/DefaultButton.svelte";
  import ConItemComponent from "../components/ConItem.svelte";
  import { mdiHeart, mdiHeartOutline } from "@mdi/js";
  import Icon from "mdi-svelte";
  $: id = queryString.parse(window.location.search).id;
  let promise: null | Promise<DetailResult> = null;
  $: promise = utils.Detail(id.toString());

  const downloadAll = async (title: string, list: ConItem[]) => {
    try {
      var zip = new JSZip();

      var img = zip.folder(title);
      list.forEach((item) => {
        let blob = utils.GetImageBlob(item.path, item.ext);
        const name = `디시콘-${item.id}-${item.title}.${item.ext}`;

        img.file(name, blob);
      });
      zip.generateAsync({ type: "blob" }).then(function (content) {
        // see FileSaver.js
        saveAs(content, `디시콘-${title}.zip`);
      });
    } catch (e) {
      utils.Toast("error", "처리중 에러가 발생하였습니다.");
    }
  };
</script>

<div>
  {#await promise}
    <div>내용을 로딩중입니다..</div>
  {:then value}
    <div class="sm:flex items-center">
      <img class="w-32 h-32" src={value.info.imageUrl} alt="preview" />
      <div class="sm:ml-4">
        <div class="text-2xl flex items-center">
          <div>
            {value.info.title}
          </div>
          <button
            class="ml-2 sm:mt-0 py-1 px-2 text-red-400 font-semibold rounded-lg hover:shadow-md hover:bg-red-100 focus:outline-none transform transition-colors duration-200"
            on:click={() => {
              utils.ToggleFavoritedCon(value.info);
              value.like = !value.like;
            }}
          >
            <Icon path={value.like ? mdiHeart : mdiHeartOutline} />
          </button>
        </div>
        <div class="text-gray-600">{value.info.description}</div>
        <div class="text-gray-600">
          제작: {value.info.author} / {value.info.regDate}
        </div>
      </div>
    </div>
    <div class="mt-4 mb-6">
      <div class="mb-4">
        {#each value.tag as item}
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >#{item}</span
          >
        {/each}
      </div>
    </div>
    <div class="sm:flex justify-between items-center mb-4">
      <div>
        <div class="text-xl mb-1 text-gray-700">콘 목록</div>
        <div class="text-gray-400">클릭하여 복사/다운로드 할 수 있습니다.</div>
      </div>
      <DefaultButton
        onClick={() => downloadAll(value.info.title, value.list)}
        text="일괄 다운로드"
      />
    </div>
    <div
      class="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-flow-row gap-4"
    >
      {#each value.list as item}
        <ConItemComponent data={item} />
      {/each}
    </div>
  {:catch error}
    <div>요청중 에러가 발생하였습니다. {error}</div>
  {/await}
</div>

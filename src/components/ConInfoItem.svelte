<script lang="ts">
  import type { ConInfo } from "../models";
  import { Link } from "svelte-routing";
  export let data: ConInfo;
</script>

<Link
  class="max-w-sm rounded overflow-hidden shadow"
  to="/detail?id={data.detailID}"
>
  <div class="flex justify-center">
    <img src={data.imageUrl} alt="image_preview" />
  </div>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{data.title}</div>
    <p class="text-gray-700 text-base">
      {data.description}
    </p>
    <div class="text-sm text-gray-600 leading-none mt-4">
      제작: {data.author}
      {data.regDate}
    </div>
  </div>
</Link>

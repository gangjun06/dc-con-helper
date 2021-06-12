<script lang="ts">
  export let onClick: () => void;
  export let text: string;
</script>

<button
  class="mt-2 sm:mt-0 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none transform transition-colors duration-200"
  on:click={onClick}
>
  {text}
</button>

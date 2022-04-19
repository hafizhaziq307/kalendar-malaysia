<script>
  import ClickOutside from "svelte-click-outside";
  import { fly } from "svelte/transition";
  import Icon from "../icons/Icon.svelte";
  let trigger;
  let isShow = false;
</script>

<div class="relative">
  <button bind:this={trigger} on:click={() => (isShow = !isShow)}>
    <Icon name="info" class="w-8 h-8" />
  </button>

  {#if isShow}
    <ClickOutside on:clickoutside={() => (isShow = false)} exclude={[trigger]}>
      <div
        in:fly={{ y: 50, duration: 250 }}
        out:fly={{ y: 50, duration: 250 }}
        class="absolute right-0 z-20 mt-1 w-52 space-y-2 rounded-lg border border-gray-200 bg-gray-100 p-4 shadow-lg">
        <div class="text-center font-bold">Kalendar Malaysia</div>
        <div class="bg mx-auto h-1 w-12 rounded-full bg-blue-600" />
        <div class="text-bold text-center ">ver 0.1.1</div>
        <div class="text-center text-sm">&copy; 2022 Hafiz Haziq</div>
      </div>
    </ClickOutside>
  {/if}
</div>

<script>
  export let number;
  export let currentDate;
  export let month;
</script>

<div
  class="w-28 h-20 grid place-content-center text-6xl text-black font-bold rounded-sm relative
  {number != '' ? 'bg-white ring-2 ring-black' : ''}">
  {#if currentDate.getDate() == number && currentDate.getMonth() == month}
    <div class="absolute top-0.5 left-0.5 rounded-full bg-blue-600 w-3 h-3 " />
  {/if}
  {number}
</div>

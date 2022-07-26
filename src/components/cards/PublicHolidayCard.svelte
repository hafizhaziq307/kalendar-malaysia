<script>
  export let publicHolidays;
  export let number;
  export let currentDate;
  export let month;
</script>

<div
  class="relative bg-gray-200 w-28 h-20 overflow-hidden rounded-sm ring-2 ring-black select-none">
  {#if currentDate.getDate() == number && currentDate.getMonth() == month}
    <div
      class="absolute top-0.5 left-0.5 rounded-full bg-blue-600 border border-white w-3 h-3 z-50" />
  {/if}

  <div class="w-full h-full">
    <!-- loop through events on the same day -->
    {#each publicHolidays as publicHoliday}
      <div
        class="relative w-full {publicHolidays.length <= 1
          ? 'h-full'
          : 'h-1/2'}">
        <img src="./img/{publicHoliday.image}" alt="" class="w-full h-full" />

        <!-- event banner -->
        <div
          class="w-full absolute bottom-0 font-medium bg-gray-900/70 flex justify-end"
          style="font-size:0.625rem">
          <div class="w-5/6 text-white capitalize text-right p-1">
            {publicHoliday.title}
          </div>
        </div>
      </div>
    {/each}
  </div>

  <!-- day banner -->
  <div
    class="absolute bottom-0 left-0 w-full text-xl pl-1 text-white font-bold ">
    {number}
  </div>
</div>

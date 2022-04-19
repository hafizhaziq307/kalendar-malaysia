<script>
  import PublicHolidayCard from "../cards/PublicHolidayCard.svelte";
  import DayCard from "../cards/DayCard.svelte";

  export let days;
  export let currentMonth;
  export let d;
  export let currentIndex;
</script>

<div class="flex space-x-2">
  <header class="space-y-2">
    {#each days as day}
      <div
        style="font-size:2.5rem"
        class="font-bold w-28 h-20 grid place-content-center uppercase ring-2 ring-black rounded-sm {day.bgColor} select-none">
        {day.title}
      </div>
    {/each}
  </header>

  <!-- loop through months -->
  {#each currentMonth.days as weeks}
    <div class="space-y-2">
      <!-- loop through weeks -->
      {#each weeks as dayperWeek}
        <div class="relative">
          {#if dayperWeek.events.length >= 1}
            <PublicHolidayCard
              publicHolidays={dayperWeek.events}
              number={dayperWeek.number}
              currentDate={d}
              month={currentIndex} />
          {:else}
            <DayCard
              number={dayperWeek.number}
              currentDate={d}
              month={currentIndex} />
          {/if}
        </div>
      {/each}
    </div>
  {/each}
</div>

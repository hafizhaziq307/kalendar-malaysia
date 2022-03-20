<script>
  import ChevronLeft from "./components/icons/ChevronLeft.svelte";
  import ChevronRight from "./components/icons/ChevronRight.svelte";
  import PublicHolidayCard from "./components/PublicHolidayCard.svelte";
  import DayCard from "./components/DayCard.svelte";

  export let months;
  export let days;
  export let events;

  let currentIndex = 6;

  $: setCurrentMonth(months[currentIndex]);

  let currentMonth = {
    name: "",
    startDay: 0,
    totalDays: 0,
    days: [
      [{}, {}, {}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}, {}, {}],
      [{}, {}, {}, {}, {}, {}, {}],
    ],
  };

  function resetCurrentMonth() {
    currentMonth = {
      name: "",
      startDay: 0,
      totalDays: 0,
      days: [
        [{}, {}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}, {}],
      ],
    };
  }

  function setCurrentMonth(month) {
    resetCurrentMonth();

    currentMonth.name = month.name;
    currentMonth.startDay = days.map((x) => x.title).indexOf(month.start);
    currentMonth.totalDays = month.end;

    let current = 0,
      slots = 0;

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 7; j++) {
        // init obj day
        let objDay = { number: "", events: [] };

        // assign number
        if (
          slots >= currentMonth.startDay &&
          current < currentMonth.totalDays
        ) {
          current++;
          objDay.number = current;

          // assign event
          for (const event of events) {
            for (let i = 0; i < event.day.length; i++) {
              if (
                currentMonth.name == event.month &&
                objDay.number == event.day[i]
              ) {
                let objPublicHoliday = {};
                objPublicHoliday.title = event.title;
                objPublicHoliday.image = event.image;
                objDay.events.push(objPublicHoliday);
              }
            }
          }
        }
        currentMonth.days[i][j] = objDay;
        slots++;
      }
    }

    // if not enough slots
    if (current <= currentMonth.totalDays) {
      const remainingDays = currentMonth.totalDays - current;

      for (let i = 0; i < remainingDays; i++) {
        // init obj day
        let objDay = { number: "", events: [] };
        current++;

        // assign number
        objDay.number = current;

        // assign event
        for (const event of events) {
          if (currentMonth.name == event.month && objDay.number == event.day) {
            let objPublicHoliday = {};
            objPublicHoliday.title = event.title;
            objPublicHoliday.image = event.image;
            objDay.events.push(objPublicHoliday);
          }
        }
        currentMonth.days[0][i] = objDay;
      }
    }
  }
</script>

<main class="space-y-2">
  <header
    class="rounded-sm ring-2 py-1 ring-black flex justify-between items-center bg-gradient-to-r from-blue-400 to-emerald-400 text-white">
    <button
      on:click={() => {
        currentIndex > 0 ? currentIndex-- : currentIndex;
      }}>
      <ChevronLeft />
    </button>

    <p class="text-3xl uppercase font-medium">{currentMonth.name} 2022</p>

    <button
      on:click={() => {
        currentIndex < 11 ? currentIndex++ : currentIndex;
      }}>
      <ChevronRight />
    </button>
  </header>

  <div class="flex space-x-2">
    <div class="space-y-2">
      {#each days as day}
        <div
          style="font-size:2.5rem"
          class="font-bold w-28 h-20 grid place-content-center uppercase ring-2 ring-black rounded-sm {day.bgColor} ">
          {day.title}
        </div>
      {/each}
    </div>

    <!-- loop through months -->
    {#each currentMonth.days as weeks, i}
      <div class="space-y-2">
        <!-- loop through weeks -->
        {#each weeks as dayperWeek}
          {#if dayperWeek.events.length >= 1}
            <PublicHolidayCard
              publicHolidays={dayperWeek.events}
              number={dayperWeek.number} />
          {:else}
            <DayCard number={dayperWeek.number} />
          {/if}
        {/each}
      </div>
    {/each}
  </div>
</main>

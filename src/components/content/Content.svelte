<script>
  import Icon from "../icons/Icon.svelte";
  import PublicHolidayCard from "../cards/PublicHolidayCard.svelte";
  import DayCard from "../cards/DayCard.svelte";

  export let days;
  export let months;
  export let events;

  const d = new Date();
  let currentIndex = d.getMonth();
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

  $: setCurrentMonth(months[currentIndex]);

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

  function haveEvent(date, arr) {
    let res = arr.find(function (obj) {
      if (obj.date === date) return true;
    });

    return typeof res === "object";
  }

  function getEvent(date, arr) {
    return arr.filter(function (obj) {
      return obj.date === date;
    });
  }

  function setCurrentMonth(m) {
    resetCurrentMonth();

    currentMonth.name = m.name;
    currentMonth.startDay = days.map((x) => x.title).indexOf(m.start);
    currentMonth.totalDays = m.end;
    currentMonth.number = m.number;

    let current = 0,
      slots = 0;

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 7; j++) {
        // init obj day
        let objDay = {
          date: "",
          events: [],
        };

        if (
          slots >= currentMonth.startDay &&
          current < currentMonth.totalDays
        ) {
          current++;

          // assign date
          objDay.date = currentMonth.number + "/" + current + "/2022";

          // assign event
          if (haveEvent(objDay.date, events)) {
            let filteredEvents = getEvent(objDay.date, events);

            for (let i = 0; i < filteredEvents.length; i++) {
              const filteredEvent = filteredEvents[i];
              objDay.events.push(filteredEvent);
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
        let objDay = {
          date: "",
          events: [],
        };
        current++;

        // assign date
        objDay.date = currentMonth.number + "/" + current + "/2022";

        // assign event
        if (haveEvent(objDay.date, events)) {
          let filteredEvents = getEvent(objDay.date, events);

          for (let i = 0; i < filteredEvents.length; i++) {
            const filteredEvent = filteredEvents[i];
            objDay.events.push(filteredEvent);
          }
        }

        currentMonth.days[0][i] = objDay;
      }
    }
  }
</script>

<div class="space-y-2">
  <!-- header -->
  <header
    class=" rounded-sm ring-2 py-1 ring-black flex justify-between items-center bg-gradient-to-r from-blue-400 to-emerald-400 text-white ">
    <button
      on:click={() => {
        currentIndex > 0 ? currentIndex-- : currentIndex;
      }}
      class="focus:outline-none">
      <Icon name="chevron-left" class="w-9 h-9" />
    </button>

    <p class="text-3xl uppercase font-medium">{currentMonth.name} 2022</p>

    <button
      on:click={() => {
        currentIndex < 11 ? currentIndex++ : currentIndex;
      }}
      class="focus:outline-none">
      <Icon name="chevron-right" class="w-9 h-9" />
    </button>
  </header>

  <!-- content -->
  <div class="flex space-x-2">
    <!-- sun - sat -->
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
            {#if dayperWeek.date === ""}
              <!-- if empty -->
              <div class="w-28 h-20" />
            {:else if dayperWeek.events.length > 0}
              <!-- if have event -->
              <PublicHolidayCard
                publicHolidays={dayperWeek.events}
                number={new Date(dayperWeek.date).getDate()}
                currentDate={d}
                month={currentIndex} />
            {:else}
              <DayCard
                number={new Date(dayperWeek.date).getDate()}
                currentDate={d}
                month={currentIndex} />
            {/if}
          </div>
        {/each}
      </div>
    {/each}
  </div>
</div>

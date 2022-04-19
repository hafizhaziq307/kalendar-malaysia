<script>
  import Icon from "./components/icons/Icon.svelte";
  import Content from "./components/sections/Content.svelte";
  import About from "./components/sections/About.svelte";

  export let months;
  export let days;
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

  const resetCurrentMonth = () => {
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
  };

  const setCurrentMonth = (m) => {
    resetCurrentMonth();

    currentMonth.name = m.name;
    currentMonth.startDay = days.map((x) => x.title).indexOf(m.start);
    currentMonth.totalDays = m.end;

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
  };
</script>

<main class="w-full min-h-screen">
  <header
    class="container mx-auto flex w-full items-center justify-end py-2 px-3">
    <About />
  </header>

  <div class="space-y-2 w-[44.5rem] mx-auto">
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

    <Content {days} {currentMonth} {d} {currentIndex} />
  </div>
</main>

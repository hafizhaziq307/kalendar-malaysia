<script>
    import TodayIndicator from "./lib/TodayIndicator.svelte";

    import NextMonth from "./lib/buttons/NextMonth.svelte";
    import PrevMonth from "./lib/buttons/PrevMonth.svelte";
    import { data_days, data_months, data_events } from "./data.js";
    import { chunkArray } from "./helper.js";

    let currentMonthIndex = new Date().getMonth();
    let currentMonthTitle = data_months[currentMonthIndex].title;
    let months = [];

    const todayDate = new Date();
    const day = todayDate.getDate();
    const month = todayDate.getMonth() + 1;
    const year = todayDate.getFullYear();
    const currentDate = `${month}/${day}/${year}`;
 
    const generateMonths = () => {
        data_months.forEach((data_month) => {
            let month = {
                title: data_month.title,
                number: data_month.number,
                days: [],
            };

            let slot = 1;

            const startIndex = data_days.findIndex(x => x.title === data_month.start);

            for (let i = 0; i < 35; i++) {
                if (i < startIndex || slot > data_month.end) {
                    month.days.push({ number: "", date: "", events: [] });
                    continue;
                }

                // assign date
                let tempDate = data_month.number + "/" + slot + "/2024";

                // assign event
                let events = [];
                if (data_events.find(x => x.date === tempDate)) {
                    let filteredEvents = data_events.filter(x => x.date === tempDate);

                    filteredEvents.forEach((filteredEvent) => {
                        events.push({
                        title: filteredEvent.title,
                        image: filteredEvent.image,
                        });
                    });
                }

                month.days.push({
                    number: slot,
                    date: tempDate,
                    events: events,
                });

                slot++;
            }

            const remainingDays = data_month.end - slot + 1;
            if (remainingDays > 0) {
                for (let i = 0; i < remainingDays; i++) {
                    // assign date
                    let tempDate = data_month.number + "/" + slot + "/2024";

                    // assign event
                    let events = [];
                    if (data_events.find(x => x.date === tempDate)) {
                        let filteredEvents = data_events.filter(x => x.date === tempDate);

                        filteredEvents.forEach((filteredEvent) => {
                            events.push({
                                title: filteredEvent.title,
                                image: filteredEvent.image,
                            });
                        });
                    }

                    month.days[i] = { number: slot, date: tempDate, events: events };
                    slot++;
                }
            }

            month.days = chunkArray(month.days, 5);

            months.push(month);
        });
    };

    const nextMonth = () => {
        if (currentMonthIndex >= 11) {
            return;
        }

        currentMonthIndex++;
        currentMonthTitle = data_months[currentMonthIndex].title;
    };

    const prevMonth = () => {
        if (currentMonthIndex <= 0) {
            return
        }

        currentMonthIndex--;
        currentMonthTitle = data_months[currentMonthIndex].title;
    };

    generateMonths();

    console.log(months);
</script>

<main class="grid place-content-center min-h-screen">
    <div>
        <header class="rounded-md flex justify-between items-center text-white py-1 px-2 mb-1 bg-gradient-to-r from-blue-400 to-emerald-400">
            <PrevMonth prevMonth={prevMonth} />
            <p class="text-2xl uppercase font-semibold">{currentMonthTitle} 2024</p>
            <NextMonth nextMonth={nextMonth} />
        </header>

      <div class="flex gap-1">
        <aside class="space-y-1">
            {#each data_days as day}
                <div class="font-bold w-28 h-20 grid place-content-center uppercase rounded-md text-3xl {day.bgColor}">
                    {day.title}
                </div>
            {/each}
        </aside>

        <div>
            {#each months as month}
                <article class="flex gap-1 {currentMonthIndex == month.number - 1 ? "" : "hidden"}">
                    {#each month.days as week}
                        <article class="space-y-1">

                            {#each week as day}
                                {#if day.number == ""}
                                    <div class="w-28 h-20"></div>
                                {:else if day.events <= 1}
                                    <div class="text-5xl font-bold bg-white w-28 h-20 rounded-md grid place-content-center relative">
                                        <TodayIndicator {day} {currentDate} />
                                        {day.number}
                                    </div>
                                {:else} 
                                    <div class="relative bg-gray-200 w-28 h-20 overflow-hidden rounded-md">
                                        <TodayIndicator {day} {currentDate}/>
                                    
                                        <div class="w-full h-full">
                                            {#each day.events as event}
                                                <div class="relative w-full {day.events.length <= 1 ? 'h-full' : 'h-1/2'}">
                                                    <img src="./img/{event.image}" alt="" class="w-full h-full"/>
                                    
                                                    <div class="w-full absolute bottom-0 font-medium bg-gray-900/80 flex justify-end" style="font-size: 0.625rem;">
                                                        <div class="w-5/6 text-white capitalize text-right p-1 font-normal leading-tight">
                                                            {event.title}
                                                        </div>
                                                    </div>
                                                </div>
                                            {/each}
                                        </div>
                                    
                                        <div class="absolute bottom-0 left-0 w-full text-xl pl-1 text-white font-bold">
                                            {day.number}
                                        </div>
                                    </div>
                                {/if}
                            {/each}
                        </article>
                    {/each}
                </article>
            {/each}
        </div>
      </div>
    </div>
  </main>
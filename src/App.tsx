import { useEffect, useState } from "react";
import { Day } from "./components/Day";
import { EventSlot } from "./components/EventSlot";
import { NormalSlot } from "./components/NormalSlot";
import { NextMonth } from "./components/buttons/NextMonth";
import { PrevMonth } from "./components/buttons/PrevMonth";
import { data_days, data_months, data_events } from "./data";
import { chunkArray } from "./helpers";

function App() {
  const [currentMonthIndex, setCurrentMonthIndex] = useState(0);
  const [currentMonthTitle, setCurrentMonthTitle] = useState("");
  const [months, setMonths] = useState<any>([]);

  const todayDate = new Date();
  const day = todayDate.getDate();
  const month = todayDate.getMonth() + 1;
  const year = todayDate.getFullYear();
  const currentDate = `${month}/${day}/${year}`;

  useEffect(() => {
    setCurrentMonthIndex(new Date().getMonth());
    generateMonths();
  }, []);

  useEffect(() => {
    setCurrentMonthTitle(data_months[currentMonthIndex].title);
  }, [currentMonthIndex]);

  const generateMonths = () => {
    let months: any = [];

    data_months.forEach((data_month) => {
      let month: any = {
        title: data_month.title,
        number: data_month.number,
        days: [],
      };

      let slot = 1;

      const startIndex = data_days.findIndex(
        (day) => day.title === data_month.start
      );

      for (let i = 0; i < 35; i++) {
        if (i < startIndex || slot > data_month.end) {
          month.days.push({ number: "", date: "", events: [] });
          continue;
        }

        // assign date
        let tempDate = data_month.number + "/" + slot + "/2023";

        // assign event
        let events: any = [];
        if (isHavingEvent(tempDate, data_events)) {
          let filteredEvents = getEvent(tempDate, data_events);

          filteredEvents.forEach((filteredEvent: any) => {
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
          let tempDate = data_month.number + "/" + slot + "/2023";

          // assign event
          let events: any = [];
          if (isHavingEvent(tempDate, data_events)) {
            let filteredEvents = getEvent(tempDate, data_events);

            filteredEvents.forEach((filteredEvent: any) => {
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

    console.log(months);
    setMonths(months);
  };

  const isHavingEvent = (date: any, arr: any) => {
    return arr.find((obj: any) => obj.date === date);
  };

  const getEvent = (date: any, arr: any) => {
    return arr.filter(function (obj: any) {
      return obj.date === date;
    });
  };

  const nextMonth = () => {
    if (currentMonthIndex >= 11) return;

    setCurrentMonthIndex(currentMonthIndex + 1);
  };

  const prevMonth = () => {
    if (currentMonthIndex <= 0) return;

    setCurrentMonthIndex(currentMonthIndex - 1);
  };

  return (
    <main className="grid place-content-center min-h-screen">
      <div>
        <header className="rounded-md flex justify-between items-center text-white py-1 px-2 mb-1 bg-gradient-to-r from-blue-400 to-emerald-400">
          <PrevMonth prevMonth={prevMonth} />
          <p className="text-2xl uppercase font-semibold">
            {currentMonthTitle} 2023
          </p>
          <NextMonth nextMonth={nextMonth} />
        </header>

        <div className="flex gap-1">
          <aside className="space-y-1">
            {data_days.map((day) => (
              <Day key={day.title} day={day} />
            ))}
          </aside>

          <div>
            {/* per months */}
            {months.map((month: any) => (
              <article
                key={month.title}
                className={`flex gap-1 ${
                  currentMonthIndex == month.number - 1 ? "" : "hidden"
                }`}
              >
                {/* per weeks */}
                {month.days.map((week: any, i: number) => (
                  // per week
                  <article key={i} className="space-y-1">
                    {week.map((day: any) => (
                      //per days
                      <>
                        {day.number == "" ? (
                          <div className="w-28 h-20"></div>
                        ) : day.events <= 1 ? (
                          <NormalSlot day={day} currentDate={currentDate} />
                        ) : (
                          <EventSlot day={day} currentDate={currentDate} />
                        )}
                      </>
                    ))}
                  </article>
                ))}
              </article>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;

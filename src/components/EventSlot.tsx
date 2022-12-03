import { TodayIndicator } from "./TodayIndicator";

export const EventSlot = (props: any) => {
  return (
    <div className="relative bg-gray-200 w-28 h-20 overflow-hidden rounded-md">
      <TodayIndicator day={props.day} currentDate={props.currentDate} />

      <div className="w-full h-full">
        {props.day.events.map((event: any) => (
          <div
            key={event.title}
            className={`relative w-full ${
              props.day.events.length <= 1 ? "h-full" : "h-1/2"
            }`}
          >
            <img
              src={`../img/${event.image}`}
              alt=""
              className="w-full h-full"
            />

            <div
              className="w-full absolute bottom-0 font-medium bg-gray-900/70 flex justify-end"
              style={{ fontSize: "0.625rem" }}
            >
              <div className="w-5/6 text-white capitalize text-right p-1 font-normal">
                {event.title}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 w-full text-xl pl-1 text-white font-bold">
        {props.day.number}
      </div>
    </div>
  );
};

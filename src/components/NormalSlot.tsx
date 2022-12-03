import { TodayIndicator } from "./TodayIndicator";

export const NormalSlot = (props: any) => {
  return (
    <div className="text-5xl font-bold bg-white w-28 h-20 rounded-md grid place-content-center relative">
      <TodayIndicator day={props.day} currentDate={props.currentDate} />

      {props.day.number}
    </div>
  );
};

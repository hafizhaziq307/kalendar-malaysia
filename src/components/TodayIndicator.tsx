export const TodayIndicator = (props: any) => {
  return (
    <div className="absolute top-0.5 left-0.5 ">
      <div
        className={` ${props.currentDate === props.day.date ? "" : "hidden"}`}
      >
        <div className="grid place-content-center">
          <div className="absolute rounded-full bg-blue-600 ring-1 ring-white w-3 h-3"></div>
          <div className=" animate-ping rounded-full bg-blue-400/90 w-3 h-3" />
        </div>
      </div>
    </div>
  );
};

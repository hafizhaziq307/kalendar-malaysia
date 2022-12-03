export const Day = (props: any) => {
  return (
    <div
      className={`font-bold w-28 h-20 grid place-content-center uppercase rounded-md text-3xl ${props.day.bgColor}`}
    >
      {props.day.title}
    </div>
  );
};

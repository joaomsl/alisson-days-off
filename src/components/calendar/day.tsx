import { getWeek, intlFormat, isThursday, isWednesday } from "date-fns";
import Column from "./column";

interface DayProps {
  date: Date | null;
}

export default function Day({ date }: DayProps) {
  if (!date) {
    return <Column className="bg-gray-200" />;
  }

  const isDayOff =
    getWeek(date, { weekStartsOn: 0 }) % 2 === 0 &&
    (isWednesday(date) || isThursday(date));

  const columnColor = isDayOff ? "bg-green-200" : "bg-amber-200";

  return (
    <Column className="aspect-square p-4 relative">
      <span
        className={`absolute top-1 right-1 leading-none rounded-full text-sm grid place-items-center font-semibold w-6 aspect-square ${columnColor}`}
      >
        {intlFormat(date, { day: "2-digit" })}
      </span>

      <p className="leading-none">{isDayOff ? "Dia de Folga" : "Trabalhar"}</p>
    </Column>
  );
}

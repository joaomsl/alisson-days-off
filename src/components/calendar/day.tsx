import { format } from "date-fns";
import Column from "./column";
import Group from "../../app/group/group";

interface DayProps {
  date: Date | null;
  group: Group;
}

export default function Day({ date, group }: DayProps) {
  if (!date) {
    return <Column className="bg-gray-200" />;
  }

  const isDayOff = group.canTakeTimeOff(date);
  const dayColor = isDayOff ? "bg-green-400" : "bg-amber-500/90";

  return (
    <Column className="aspect-square p-4 relative">
      <span
        className={`absolute top-1 right-1 leading-none rounded-full text-sm grid place-items-center font-semibold w-6 aspect-square ${dayColor}`}
      >
        {format(date, "d")}
      </span>

      <p className="leading-none">{isDayOff ? "Dia de Folga" : "Trabalhar"}</p>
    </Column>
  );
}

import { format } from "date-fns";
import Column from "../column";
import Group from "../../../app/group/group";
import { Day as IDay } from "../../../app/support/date";
import Badge from "./badge";

interface DayProps {
  day: IDay;
  group: Group;
}

export default function Day({ day, group }: DayProps) {
  const date = day.date;

  if (!date) {
    return <Column className="bg-gray-200" />;
  }

  const isDayOff = group.canTakeTimeOff(date);
  const dayColor = isDayOff ? "secondary" : "primary";

  return (
    <Column className="aspect-square p-1">
      <div className="flex justify-between items-center">
        <p className="leading-none">
          {isDayOff ? "Dia de Folga" : "Trabalhar"}
        </p>
        <div className="flex gap-1 justify-between">
          {day.isPayDay ? <Badge variant="dark">$</Badge> : null}
          <Badge variant={dayColor}>{format(date, "d")}</Badge>
        </div>
      </div>
    </Column>
  );
}

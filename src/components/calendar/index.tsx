import { ReactNode } from "react";
import Column from "./column";
import Row from "./row";

interface CalendarProps {
  daysOfTheWeek: string[];
  children: ReactNode;
  className?: string;
}

const makeDaysOfWeekList = (daysOfWeek: string[]) => {
  return daysOfWeek.map((day: string, index: number) => (
    <Column key={index} className="text-center py-2 uppercase">
      {day}
    </Column>
  ));
};

export default function Calendar({
  daysOfTheWeek,
  children,
  className: className,
}: CalendarProps) {
  return (
    <div className="overflow-x-auto">
      <table className={`mt-3 w-full table-fixed border-collapse ${className}`}>
        <thead>
          <Row className="bg-gray-200">{makeDaysOfWeekList(daysOfTheWeek)}</Row>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}

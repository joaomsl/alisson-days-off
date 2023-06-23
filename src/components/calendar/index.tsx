import { ReactNode } from "react";
import Column from "./column";
import Row from "./row";

interface CalendarProps {
  month: string;
  year: number;
  daysOfTheWeek: string[];
  children: ReactNode;
  className?: string;
}

const makeDaysOfWeekList = (daysOfWeek: string[]) => {
  return daysOfWeek.map((day: string, index: number) => (
    <Column key={index} className="text-center py-2">
      {day}
    </Column>
  ));
};

export default function Calendar({
  month,
  year,
  daysOfTheWeek,
  children,
  className: className,
}: CalendarProps) {
  return (
    <section className="bg-slate-100 p-5 md:p-6 rounded-lg shadow-md">
      <header className="flex items-center justify-between">
        <h1 className="font-semibold text-4xl first-letter:capitalize">
          {month}
        </h1>
        <span className="font-medium text-xl">{year}</span>
      </header>

      <div className="overflow-x-auto">
        <table
          className={`mt-3 w-full table-fixed border-collapse ${className}`}
        >
          <thead>
            <Row className="bg-gray-200">
              {makeDaysOfWeekList(daysOfTheWeek)}
            </Row>
          </thead>
          <tbody>{children}</tbody>
        </table>
      </div>
    </section>
  );
}

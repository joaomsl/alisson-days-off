import * as dateFns from "date-fns";
import pt from "date-fns/locale/pt";

export const daysOfWeek = [...Array(7).keys()].map((weekIndex) => {
  const date = dateFns.setDay(new Date(), weekIndex);
  return dateFns.format(date, "iii", { locale: pt });
});

export interface Day {
  date: Date | null;
  isPayDay: boolean;
}

export function calendarWeeksToDate(
  weeks: number[][],
  dateReference: Date
): Day[][] {
  return weeks.map((week) =>
    week.map((day) => {
      const date = day > 0 ? dateFns.setDate(dateReference, day) : null;
      const isPayDay = true;

      return { date, isPayDay };
    })
  );
}

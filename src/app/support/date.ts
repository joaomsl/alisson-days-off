import * as dateFns from "date-fns";
import pt from "date-fns/locale/pt";

export const daysOfWeek = [...Array(7).keys()].map((weekIndex) => {
  const date = dateFns.setDay(new Date(), weekIndex);
  return dateFns.format(date, "iii", { locale: pt });
});

export function calendarWeeksToDate(
  weeks: number[][],
  dateReference: Date
): (Date | null)[][] {
  return weeks.map((week) =>
    week.map((day) => (day > 0 ? dateFns.setDate(dateReference, day) : null))
  );
}

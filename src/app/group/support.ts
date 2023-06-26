import * as dateFns from "date-fns";

export function isDayOff(date: Date): boolean {
  let week =
    dateFns.getWeek(date, { weekStartsOn: 1 }) +
    Math.min(1, date.getFullYear() - new Date().getFullYear());

  return week % 2 === 0
    ? dateFns.isWednesday(date) || dateFns.isThursday(date)
    : !dateFns.isWednesday(date) && !dateFns.isThursday(date);
}

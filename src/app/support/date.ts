import * as dateFns from "date-fns";
import pt from "date-fns/locale/pt";

const paymentDayUntil = 5;

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
  dateReference: Date,
  holidays: string[]
): Day[][] {
  let skippedDays = 0;
  let foundedPaymentDay = false;

  return weeks.map((week) =>
    week.map((day) => {
      const date = day > 0 ? dateFns.setDate(dateReference, day) : null;

      if (
        date &&
        (dateFns.isSunday(date) ||
          holidays.includes(dateFns.format(date, "yyyy-MM-dd")))
      ) {
        skippedDays++;
      }

      const isPayDay = date
        ? date.getDate() - skippedDays >= paymentDayUntil && !foundedPaymentDay
        : false;

      if (isPayDay) {
        foundedPaymentDay = true;
      }

      return { date, isPayDay };
    })
  );
}

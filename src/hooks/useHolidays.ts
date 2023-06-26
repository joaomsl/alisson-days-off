import { useEffect, useState } from "react";

function pluckDates(response: { date: string }[]): string[] {
  return response.map((holiday) => holiday.date);
}

export default function useHolidays(date: Date) {
  const [holidays, setHolidays] = useState<string[]>([]);

  useEffect(() => {
    const storage = window.localStorage;
    const year = date.getFullYear();

    const storageKey = `holidays.${year}`;
    const cachedHolidays = storage.getItem(storageKey);
    if (cachedHolidays) {
      setHolidays(JSON.parse(cachedHolidays));
      return;
    }

    fetch(`https://brasilapi.com.br/api/feriados/v1/${year}`)
      .then((response) => response.json())
      .then((response) => {
        const dates = pluckDates(response);
        storage.setItem(storageKey, JSON.stringify(dates));

        setHolidays(dates);
      });

    return () => setHolidays([]);
  }, [date, setHolidays]);

  return holidays;
}

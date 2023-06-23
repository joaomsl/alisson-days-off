import { sub, intlFormat, setDate, add } from "date-fns";
import Calendar from "../components/calendar";
import Day from "../components/calendar/day";
import Row from "../components/calendar/row";
import Layout from "../components/layout";
import CalendarJs from "calendar-js";
import { useState } from "react";
import Button from "../components/button";
import {
  ArrowBendDownLeft,
  ArrowBendDownRight,
  ArrowClockwise,
} from "@phosphor-icons/react";

function makeDays(days: number[], currentDate: Date) {
  return days.map((day: number, index: number) => (
    <Day date={day > 0 ? setDate(currentDate, day) : null} key={index} />
  ));
}

function makeWeeks(weeks: number[][], currentDate: Date) {
  return weeks.map((days: number[], index: number) => (
    <Row key={index}>{makeDays(days, currentDate)}</Row>
  ));
}

const daysOfWeek = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

export default function App() {
  const [date, setCurrentDate] = useState(new Date());

  const calendar = CalendarJs().of(
    date.getFullYear(),
    date.getMonth()
  ).calendar;

  return (
    <Layout>
      <Calendar
        month={intlFormat(date, { month: "long" })}
        year={parseInt(intlFormat(date, { year: "numeric" }))}
        daysOfTheWeek={daysOfWeek}
        className="min-h-[336px]"
      >
        {makeWeeks(calendar, date)}
      </Calendar>

      <footer className="mt-3 flex justify-end gap-3">
        <Button onClick={() => setCurrentDate(sub(date, { months: 1 }))}>
          <span>Voltar</span>
          <ArrowBendDownLeft size={18} weight="bold" />
        </Button>
        <Button onClick={() => setCurrentDate(new Date())}>
          <span>Resetar</span>
          <ArrowClockwise size={18} weight="bold" />
        </Button>
        <Button onClick={() => setCurrentDate(add(date, { months: 1 }))}>
          <ArrowBendDownRight size={18} weight="bold" />
          <span>Próximo</span>
        </Button>
      </footer>
    </Layout>
  );
}

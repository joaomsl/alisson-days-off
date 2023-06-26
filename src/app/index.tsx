import { sub, setDate, add, format } from "date-fns";
import Calendar from "../components/calendar";
import Day from "../components/calendar/day";
import Row from "../components/calendar/row";
import Layout from "../components/layout";
import CalendarJs from "calendar-js";
import pt from "date-fns/locale/pt";
import { useState } from "react";
import Button from "../components/button";
import {
  ArrowBendDownLeft,
  ArrowBendDownRight,
  ArrowClockwise,
  ArrowsDownUp,
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
      <section className="bg-slate-100 p-5 md:p-6 rounded-lg shadow-md text-center">
        <header className="sm:flex items-center justify-between">
          <h1 className="font-semibold text-4xl tracking-tighter">Turma A/B</h1>
          
          <div className="flex justify-center items-center gap-3">
            <span className="font-medium text-xl sm:text-2xl first-letter:capitalize">
              { format(date, 'MMMM', {locale: pt}) }
            </span>
            <span className="font-medium sm:font-semibold text-xl sm:bg-zinc-900 sm:text-slate-100 sm:px-4 sm:py-2 rounded-full">{ date.getFullYear() }</span>
          </div>
        </header>

        <Calendar
          daysOfTheWeek={daysOfWeek}
          className="min-h-[336px] min-w-[1044px]"
        >
          {makeWeeks(calendar, date)}
        </Calendar>
      </section>


      <footer className="mt-3 flex justify-end sm:justify-between gap-3">
        <Button onClick={() => setCurrentDate(new Date())}>
          <ArrowsDownUp size={18} weight="bold" />
          <span className="hidden sm:block">Trocar turma</span>
        </Button>
        
        <div className="flex gap-3">
          <Button onClick={() => setCurrentDate(new Date())}>
            <ArrowClockwise size={18} weight="bold" />
            <span className="hidden sm:block">Resetar</span>
          </Button>
          <Button onClick={() => setCurrentDate(sub(date, { months: 1 }))}>
            <ArrowBendDownLeft size={18} weight="bold" />
            <span className="hidden sm:block">Voltar</span>
          </Button>
          <Button onClick={() => setCurrentDate(add(date, { months: 1 }))}>
            <ArrowBendDownRight size={18} weight="bold" />
            <span className="hidden sm:block">Próximo</span>
          </Button>
        </div>
      </footer>
    </Layout>
  );
}

import * as dateFns from "date-fns";
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
import makeGroup from "./group/factory";
import { calendarWeeksToDate, daysOfWeek } from "./support/date";
import { isDayOff } from "./group/support";
import Group from "./group/group";

const groups = [
  makeGroup(0, "C/D", (date: Date) => isDayOff(date)),
  makeGroup(1, "A/B", (date: Date) => !isDayOff(date)),
];

export default function App() {
  const [date, setCurrentDate] = useState(new Date());
  const [group, setCurrentGroup] = useState<Group>(groups[0]);

  const makeDays = (week: (Date | null)[]) => {
    return week.map((date: Date | null, index: number) => (
      <Day date={date} group={group} key={index} />
    ));
  };

  const makeWeeks = (weeks: (Date | null)[][]) => {
    return weeks.map((week: (Date | null)[], index: number) => (
      <Row key={index}>{makeDays(week)}</Row>
    ));
  };

  const nextGroup = () => setCurrentGroup(groups[group.id + 1] ?? groups[0]);
  const resetToCurrent = () => setCurrentDate(new Date());
  const nextMonth = () => setCurrentDate(dateFns.add(date, { months: 1 }));
  const previousMonth = () => setCurrentDate(dateFns.sub(date, { months: 1 }));

  const calendar = CalendarJs().of(
    date.getFullYear(),
    date.getMonth()
  ).calendar;

  return (
    <Layout>
      <section className="bg-slate-100 p-5 md:p-6 rounded-lg shadow-md text-center">
        <header className="sm:flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              className="block w-8 mx-auto"
              src="/brand-icon.webp"
              alt="Logo da Skala"
            />
            <h1 className="font-semibold text-4xl tracking-tighter">
              Turma {group.name}
            </h1>
          </div>

          <div className="flex justify-center items-center gap-3">
            <span className="font-medium text-xl sm:text-2xl first-letter:capitalize">
              {dateFns.format(date, "MMMM", { locale: pt })}
            </span>
            <span className="font-medium sm:font-semibold text-xl sm:bg-zinc-900 sm:text-slate-100 sm:px-4 sm:py-2 rounded-full">
              {date.getFullYear()}
            </span>
          </div>
        </header>

        <Calendar
          daysOfTheWeek={daysOfWeek}
          className="min-h-[336px] min-w-[1044px]"
        >
          {makeWeeks(calendarWeeksToDate(calendar, date))}
        </Calendar>
      </section>

      <footer className="mt-3 flex justify-end sm:justify-between gap-3">
        <Button onClick={nextGroup}>
          <ArrowsDownUp size={18} weight="bold" />
          <span className="hidden sm:block">Trocar turma</span>
        </Button>

        <div className="flex gap-3">
          <Button onClick={resetToCurrent}>
            <ArrowClockwise size={18} weight="bold" />
            <span className="hidden sm:block">Resetar</span>
          </Button>
          <Button onClick={previousMonth}>
            <ArrowBendDownLeft size={18} weight="bold" />
            <span className="hidden sm:block">Voltar</span>
          </Button>
          <Button onClick={nextMonth}>
            <ArrowBendDownRight size={18} weight="bold" />
            <span className="hidden sm:block">Próximo</span>
          </Button>
        </div>
      </footer>
    </Layout>
  );
}

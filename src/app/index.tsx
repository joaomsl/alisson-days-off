import { setDate } from "date-fns";
import Calendar from "../components/calendar";
import Day from "../components/calendar/day";
import Row from "../components/calendar/row";
import Layout from "../components/layout";
import CalendarJs from "calendar-js";

function makeDays(days: number[]) {
  return days.map((day: number, index: number) => (
    <Day date={day > 0 ? setDate(Date.now(), day) : null} key={index} />
  ));
}

function makeWeeks(weeks: number[][]) {
  return weeks.map((days: number[], index: number) => (
    <Row key={index}>{makeDays(days)}</Row>
  ));
}

const daysOfWeek = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

const date = new Date();
const calendar = CalendarJs().of(date.getFullYear(), date.getMonth()).calendar;

export default function App() {
  return (
    <Layout>
      <Calendar month="Junho" year={2023} daysOfTheWeek={daysOfWeek}>
        {makeWeeks(calendar)}
      </Calendar>
    </Layout>
  );
}

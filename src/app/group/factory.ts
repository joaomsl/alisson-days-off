import Group from "./group";

export default function makeGroup(
  id: number,
  name: string,
  canTakeTimeOff: (date: Date) => boolean
): Group {
  return { id, name, canTakeTimeOff };
}

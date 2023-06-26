export default interface Group {
  id: number;
  name: string;
  canTakeTimeOff: (date: Date) => boolean;
}

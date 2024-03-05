export interface Time {
  hours: number;
  minutes: number;
  day: 1 | 2 | 3 | 4 | 5 | 6 | 7;
}

interface BaseCalendarItem {
  start: Time;
  name: string;
}

export interface Event extends BaseCalendarItem {
  type: "event";
  duration: number;
}

export interface Task extends BaseCalendarItem {
  type: "task";
  done: boolean;
}

export type CalendarItem = Event | Task;

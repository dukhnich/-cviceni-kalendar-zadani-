import { CalendarItem } from "./model";

export const calendarItems: CalendarItem[] = [
  {
    start: { hours: 9, minutes: 30, day: 5 },
    name: "Snídaně s týmem",
    type: "event",
    duration: 60,
  },
  {
    start: { hours: 11, minutes: 0, day: 1 },
    name: "Kontrola e-mailů",
    type: "task",
    done: true,
  },
  {
    start: { hours: 14, minutes: 15, day: 4 },
    name: "Jednání s klientem",
    type: "event",
    duration: 45,
  },
  {
    start: { hours: 16, minutes: 0, day: 2 },
    name: "Práce na projektu TS",
    type: "task",
    done: false,
  },
  {
    start: { hours: 9, minutes: 45, day: 1 },
    name: "Ranní běh",
    type: "task",
    done: true,
  },
  {
    start: { hours: 11, minutes: 30, day: 2 },
    name: "Schůzka s dodavateli",
    type: "event",
    duration: 90,
  },
  {
    start: { hours: 15, minutes: 0, day: 2 },
    name: "Vylepšení webové prezentace",
    type: "task",
    done: false,
  },
  {
    start: { hours: 17, minutes: 0, day: 6 },
    name: "Večeře s přáteli",
    type: "event",
    duration: 120,
  },
  {
    start: { hours: 10, minutes: 0, day: 3 },
    name: "Aktualizace dokumentace",
    type: "task",
    done: true,
  },
  {
    start: { hours: 13, minutes: 30, day: 3 },
    name: "Workshop o marketingu",
    type: "event",
    duration: 180,
  },
];
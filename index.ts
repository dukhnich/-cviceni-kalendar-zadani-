import { CalendarItem } from "./model.js";
import { calendarItems } from "./data.js";

const renderGrid = (): void => {
  const gridElement = document.querySelector(".grid")!;
  const count = 7 * 24;
  for (let i = 0; i < count; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    gridElement.appendChild(cell);
  }
};

renderGrid();

const renderCalendar = (items: CalendarItem[]): void => {
  items.forEach((item: CalendarItem) => {
    const dayEl: HTMLDivElement | null = document.querySelector(
      `#day${item.start.day}`
    );
    if (!dayEl) {
      return;
    }
    const el = document.createElement("div");
    el.classList.add("calendar-item");
    el.classList.add(item.type === "task" ? "item-task" : "item-event");
    if (item.type === "task" && item.done) {
      el.classList.add("task-done");
    }
    el.style.marginTop = `${item.start.hours * 60 + item.start.minutes}px`;
    el.style.height = item.type === "task" ? "auto" : `${item.duration}px`;
    el.innerText = item.name;
    dayEl.appendChild(el);
  });
};

renderCalendar(calendarItems);

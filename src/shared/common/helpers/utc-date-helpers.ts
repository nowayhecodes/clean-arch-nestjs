import { add, sub, format, differenceInDays } from 'date-fns';

const SaturdayInJSDate = 6;
const SundayInJSDate = 0;

export const getUTCDate = (currentDate = new Date()) => {
  const year = currentDate.getUTCFullYear();
  const month = currentDate.getUTCMonth();
  const day = currentDate.getUTCDate();
  const hours = currentDate.getUTCHours();
  const minutes = currentDate.getUTCMinutes();
  const seconds = currentDate.getUTCSeconds();
  const milliseconds = currentDate.getUTCMilliseconds();
  return new Date(year, month, day, hours, minutes, seconds, milliseconds);
};

export const addDays = (date: Date, days: number): Date => {
  return add(date, { days });
};

export const addHours = (date: Date, hours: number): Date => {
  return add(date, { hours });
};

export const addMinutes = (date: Date, minutes: number): Date => {
  return add(date, { minutes });
};

export const subHours = (date: Date, hours: number): Date => {
  return sub(date, { hours });
};

const getDaysToNextWeekDay = (currentDate: Date) => {
  const currentDay = currentDate.getUTCDay();

  if (currentDay === SaturdayInJSDate) return 2;
  if (currentDay === SundayInJSDate) return 1;

  return 0;
};

export const getNextWeekDay = (currentDate = getUTCDate()): Date => {
  const daysToNextDate = getDaysToNextWeekDay(currentDate);

  return addDays(currentDate, daysToNextDate);
};

export const getDifferenceInDays = (startDate: Date, endDate: Date): number => {
  return differenceInDays(startDate, endDate);
};

export const getLocalDateWithOutTimes = (date = getUTCDate()) => {
  return format(date, 'dd/MM/yyyy');
};

export const getDateWithOutTimes = (date: Date) => {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
};

export const replaceTimes = (
  date: Date,
  hours: number,
  minutes = 0,
  seconds = 0,
  milliseconds = 0,
) => {
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    hours,
    minutes,
    seconds,
    milliseconds,
  );
};

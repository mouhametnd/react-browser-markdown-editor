import { MonthsEnum } from '../constants/date';

const getDateFormated = (value: number) => {
  const date = new Date(value);
  const year = date.getFullYear();
  const month = MonthsEnum[date.getMonth()];
  const day = date.getDate();

  return `${month} ${day}, ${year}`;
};

export default getDateFormated;

import { ChronoUnit } from 'js-joda';

import { isAfterOrEqual } from './is-after-or-equal';
import { isBeforeOrEqual } from './is-before-or-equal';
import { JodaDate } from '../joda-date';


interface ComparisonTolerance {
  units: ChronoUnit;
  value: number;
}


export function isBetween(options: {
  date: JodaDate;
  startDate: JodaDate;
  endDate: JodaDate;
  tolerance?: ComparisonTolerance;

}): boolean {

  const {
    date,
    startDate,
    endDate,
    tolerance,

  } = options;

  return (
    isAfterOrEqual(date, startDate, { tolerance }) &&
    isBeforeOrEqual(date, endDate, { tolerance })
  );

}

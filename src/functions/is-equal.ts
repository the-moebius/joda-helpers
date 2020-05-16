
import { ComparisonTolerance } from '../comparison-tolerance';
import { isBetween } from './is-between';
import { JodaDate } from '../joda-date';
import { toZonedDateTime } from './to-zoned-date-time';


export function isEqual(
  date1: JodaDate,
  date2: JodaDate,
  options?: {
    tolerance?: ComparisonTolerance;
  }

): boolean {

  const { tolerance } = (options || {});

  date1 = toZonedDateTime(date1);
  date2 = toZonedDateTime(date2);

  if (!tolerance) {
    return date1.isEqual(date2);
  }

  return isBetween({
    date: date1,
    startDate: date2,
    endDate: date2,
    tolerance,
  });

}

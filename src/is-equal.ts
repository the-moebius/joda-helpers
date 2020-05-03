
import { ComparisonTolerance } from './comparison-tolerance';
import { isBetween } from './is-between';
import { JodaDate } from './joda-date.type';


export function isEqual(
  date1: JodaDate,
  date2: JodaDate,
  options: {
    tolerance?: ComparisonTolerance;
  }

): boolean {

  const { tolerance } = options;

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

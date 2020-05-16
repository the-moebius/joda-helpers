
import { ComparisonTolerance } from '../comparison-tolerance';
import { JodaDate } from '../joda-date';
import { toZonedDateTime } from './to-zoned-date-time';


export function isAfter(
  date1: JodaDate,
  date2: JodaDate,
  options?: {
    tolerance?: ComparisonTolerance;
  }

): boolean {

  const { tolerance } = (options || {});

  date1 = toZonedDateTime(date1);
  date2 = toZonedDateTime(date2);

  if (tolerance) {
    date2 = date2.minus(
      tolerance.value,
      tolerance.units
    );
  }

  return (
    // @ts-ignore
    date1.isAfter(date2)
  );

}

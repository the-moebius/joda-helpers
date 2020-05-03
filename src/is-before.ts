
import { ComparisonTolerance } from './comparison-tolerance';
import { JodaDate } from './joda-date.type';


export function isBefore(
  date1: JodaDate,
  date2: JodaDate,
  options?: {
    tolerance?: ComparisonTolerance;
  }

): boolean {

  const { tolerance } = (options || {});

  if (tolerance) {
    date2 = date2.plus(
      tolerance.value,
      tolerance.units
    );
  }

  return (
    // @ts-ignore
    date1.isBefore(date2)
  );

}

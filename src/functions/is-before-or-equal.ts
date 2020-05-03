
import { ComparisonTolerance } from '../comparison-tolerance';
import { JodaDate } from '../joda-date';


export function isBeforeOrEqual(
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
    date1.isEqual(date2) ||

    // @ts-ignore
    date1.isBefore(date2)
  );

}

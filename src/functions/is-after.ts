
import { ComparisonTolerance } from '../comparison-tolerance';
import { JodaDate } from '../joda-date';


export function isAfter(
  date1: JodaDate,
  date2: JodaDate,
  options?: {
    tolerance?: ComparisonTolerance;
  }

): boolean {

  const { tolerance } = (options || {});

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

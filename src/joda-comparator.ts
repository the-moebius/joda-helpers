
import { jodaDateToNativeDate } from './functions/joda-date-to-native-date';
import { JodaDate } from './joda-date.type';


export class JodaComparator {

  public static isBefore(date1: JodaDate, date2: JodaDate): boolean {
    return (jodaDateToNativeDate(date1) < jodaDateToNativeDate(date2));
  }

  public static isAfter(date1: JodaDate, date2: JodaDate): boolean {
    return (jodaDateToNativeDate(date1) > jodaDateToNativeDate(date2));
  }

  public static isEqual(date1: JodaDate, date2: JodaDate): boolean {
    return (
      jodaDateToNativeDate(date1).getTime() ===
      jodaDateToNativeDate(date2).getTime()
    );
  }

  public static isBetween(
    date: JodaDate,
    startDate: JodaDate,
    endDate: JodaDate
  ): boolean {

    return (
      (this.isEqual(date, startDate) || this.isAfter(date, startDate)) &&
      (this.isEqual(date, endDate) || this.isBefore(date, endDate))
    );

  }

}


import {JodaDate} from './joda-date.type';
import {jodaDateToNativeDate} from './joda-date-to-native-date';


export class JodaComparator {

  public static isBefore (date1: JodaDate, date2: JodaDate): boolean {
    return (jodaDateToNativeDate(date1) < jodaDateToNativeDate(date2));
  }

  public static isAfter (date1: JodaDate, date2: JodaDate): boolean {
    return (jodaDateToNativeDate(date1) > jodaDateToNativeDate(date2));
  }

  public static isEqual (date1: JodaDate, date2: JodaDate): boolean {
    return (jodaDateToNativeDate(date1).getTime() === jodaDateToNativeDate(date2).getTime());
  }

}


import {LocalDate, nativeJs} from 'js-joda';


export function nativeDateToLocalDate (date: Date): LocalDate {
  try {
    return LocalDate.from(nativeJs(date));
  } catch (error) {
    console.warn('Failed to convert native Date to LocalDate', error);
    return null;
  }
}


import {ZonedDateTime} from 'js-joda';
import {jodaDateToNativeDate} from './joda-date-to-native-date';


export function zonedDateTimeToString (date: ZonedDateTime): string | null {
  try {
    return jodaDateToNativeDate(date).toISOString();
  } catch (error) {
    console.warn('Failed to convert ZonedDateTime to string', error);
    return null;
  }
}

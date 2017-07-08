
import {DateTimeFormatter, ZonedDateTime} from 'js-joda';


export function zonedDateTimeToString (date: ZonedDateTime): string | null {
  try {
    return date.format(DateTimeFormatter.ISO_LOCAL_DATE_TIME);
  } catch (error) {
    console.warn('Failed to convert ZonedDateTime to string', error);
    return null;
  }
}

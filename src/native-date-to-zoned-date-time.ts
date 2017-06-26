
import {nativeJs, ZonedDateTime} from 'js-joda';


export function nativeDateToZonedDateTime (date: Date): ZonedDateTime {
  try {
    return ZonedDateTime.from(nativeJs(date));
  } catch (error) {
    console.warn('Failed to convert native Date to ZonedDateTime', error);
    return null;
  }
}

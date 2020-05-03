
import { nativeJs, ZonedDateTime } from 'js-joda';

import { DateConversionError } from '../errors/date-conversion-error';


export function nativeDateToZonedDateTime(date: Date): ZonedDateTime {
  try {
    return ZonedDateTime.from(nativeJs(date));

  } catch (error) {
    throw new DateConversionError(
      `Failed to convert native Date to ZonedDateTime: ${error.toString()}`
    );
  }
}

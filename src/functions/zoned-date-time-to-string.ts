
import { ZonedDateTime } from 'js-joda';

import { DateConversionError } from '../errors/date-conversion-error';
import { jodaDateToNativeDate } from './joda-date-to-native-date';


export function zonedDateTimeToString(date: ZonedDateTime): string {
  try {
    return jodaDateToNativeDate(date).toISOString();

  } catch (error) {
    throw new DateConversionError(
      `Failed to convert ZonedDateTime to string: ${error.toString()}`
    );
  }
}

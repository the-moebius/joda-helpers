
import { LocalDate, nativeJs } from 'js-joda';

import { DateConversionError } from '../errors/date-conversion-error';


export function nativeDateToLocalDate(date: Date): LocalDate {
  try {
    return LocalDate.from(nativeJs(date));

  } catch (error) {
    throw new DateConversionError(
      `Failed to convert native Date to LocalDate: ${error.toString()}`
    );
  }
}

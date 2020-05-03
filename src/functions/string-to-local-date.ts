
import { LocalDate } from 'js-joda';

import { DateConversionError } from '../errors/date-conversion-error';


export function stringToLocalDate(dateString: string): LocalDate {

  try {
    const date = new Date(
      Date.parse(dateString)
    );

    return LocalDate.of(
      date.getFullYear(),
      date.getMonth() + 1,
      date.getDate()
    );

  } catch (error) {
    throw new DateConversionError(
      `Failed to convert ISO:8601 string to LocalDate: ${error.toString()}`
    );
  }

}
